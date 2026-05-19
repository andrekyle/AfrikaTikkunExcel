import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, File as FileIcon, Loader2 } from 'lucide-react';
import {
  CourseId,
  CourseResource,
  formatBytes,
  listResources,
} from '@/services/courseResourceService';

interface Props {
  courseId: CourseId;
  title?: string;
}

export default function CourseResourcesPanel({ courseId, title = 'Course Materials' }: Props) {
  const [resources, setResources] = useState<CourseResource[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    listResources(courseId)
      .then((items) => { if (alive) setResources(items); })
      .catch((e) => console.error('Failed to load course resources:', e))
      .finally(() => { if (alive) setLoading(false); });
    return () => { alive = false; };
  }, [courseId]);

  if (!loading && resources.length === 0) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>
          Downloadable files for this course
        </CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex justify-center py-4">
            <Loader2 className="h-5 w-5 animate-spin" />
          </div>
        ) : (
          <ul className="divide-y">
            {resources.map((r) => (
              <li key={r.id} className="flex items-center gap-3 py-2">
                <FileIcon className="h-5 w-5 shrink-0 text-muted-foreground" />
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate text-sm">{r.fileName}</p>
                  <p className="text-xs text-muted-foreground">
                    {formatBytes(r.sizeBytes)}
                    {r.description ? ` · ${r.description}` : ''}
                  </p>
                </div>
                <Button asChild variant="outline" size="sm">
                  <a href={r.downloadURL} target="_blank" rel="noreferrer" download>
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
