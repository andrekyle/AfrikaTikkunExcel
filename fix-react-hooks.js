import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directories to search
const directories = [
  path.join(__dirname, 'src/components'),
  path.join(__dirname, 'src/pages'),
  path.join(__dirname, 'src/providers')
];

// React hooks to find and replace
const hooksToReplace = [
  'useState',
  'useEffect',
  'useCallback',
  'useRef',
  'useMemo',
  'useContext',
  'useReducer',
  'useLayoutEffect',
  'useDebugValue',
  'useImperativeHandle'
];

// Function to process a file
function processFile(filePath) {
  // Skip non-React files
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.jsx')) {
    return;
  }

  try {
    console.log(`Processing ${filePath}`);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if React is already imported
    const hasReactImport = content.includes('import React');
    
    // Find destructured hook imports
    const importPattern = /import\s+(?:React,\s*)?{([^}]*)}\s+from\s+['"]react['"]/g;
    let importMatch;
    
    while ((importMatch = importPattern.exec(content)) !== null) {
      const importContent = importMatch[1];
      
      // Check if any hooks are in the destructured import
      const hasHooks = hooksToReplace.some(hook => 
        new RegExp(`\\b${hook}\\b`).test(importContent)
      );
      
      if (hasHooks) {
        // Extract non-hook imports
        const nonHookImports = importContent
          .split(',')
          .map(item => item.trim())
          .filter(item => !hooksToReplace.some(hook => item === hook));
        
        let newImport = '';
        
        if (!hasReactImport) {
          // If React wasn't imported, add it
          newImport = 'import React from \'react\';';
          
          // If there are non-hook imports, keep them in a separate destructured import
          if (nonHookImports.length > 0) {
            newImport += `\nimport { ${nonHookImports.join(', ')} } from 'react';`;
          }
        } else if (nonHookImports.length > 0) {
          // Keep non-hook imports in a destructured import
          newImport = `import { ${nonHookImports.join(', ')} } from 'react';`;
        }
        
        // Replace the original import statement
        content = content.replace(importMatch[0], newImport);
        modified = true;
      }
    }
    
    // Replace hook usages with React namespace
    hooksToReplace.forEach(hook => {
      // Replace standalone hook calls not already prefixed with React.
      const hookPattern = new RegExp(`\\b(?<!React\\.)(${hook})\\(`, 'g');
      if (hookPattern.test(content)) {
        content = content.replace(hookPattern, `React.${hook}(`);
        modified = true;
      }
    });
    
    // Save the modified content
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed ${filePath}`);
    }
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err);
  }
}

// Function to recursively process files in a directory
function processDirectory(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    
    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else {
      processFile(fullPath);
    }
  }
}

// Process all directories
directories.forEach(processDirectory);

console.log('All React hook imports and usages have been fixed!');
