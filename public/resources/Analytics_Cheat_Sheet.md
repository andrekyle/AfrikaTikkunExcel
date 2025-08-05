# Excel Analytics Cheat Sheet

## Data Preparation Functions

| Function | Purpose | Example |
|----------|---------|---------|
| `TRIM()` | Remove extra spaces | `=TRIM(A2)` |
| `CLEAN()` | Remove non-printable characters | `=CLEAN(A2)` |
| `PROPER()` | Capitalize first letter of each word | `=PROPER(A2)` |
| `LEFT()`, `RIGHT()`, `MID()` | Extract parts of text | `=LEFT(A2,5)` |
| `CONCAT()` or `&` | Combine text | `=A2&" "&B2` |
| `TEXT()` | Format numbers as text | `=TEXT(A2,"dd-mmm-yyyy")` |
| `VALUE()` | Convert text to number | `=VALUE(A2)` |
| `SUBSTITUTE()` | Replace specific text | `=SUBSTITUTE(A2,"old","new")` |

## Data Analysis Functions

| Function | Purpose | Example |
|----------|---------|---------|
| `SUMIF()` | Conditional sum | `=SUMIF(A2:A10,">100")` |
| `COUNTIF()` | Conditional count | `=COUNTIF(B2:B10,"Complete")` |
| `AVERAGEIF()` | Conditional average | `=AVERAGEIF(A2:A10,">100")` |
| `MAXIFS()` | Conditional maximum | `=MAXIFS(C2:C10,A2:A10,">100",B2:B10,"Complete")` |
| `MINIFS()` | Conditional minimum | `=MINIFS(C2:C10,A2:A10,">100")` |
| `SUMPRODUCT()` | Multiply then sum | `=SUMPRODUCT((A2:A10>100)*(B2:B10="Complete")*C2:C10)` |
| `FREQUENCY()` | Data distribution | `=FREQUENCY(A2:A10,bins)` |

## Lookup Functions

| Function | Purpose | Example |
|----------|---------|---------|
| `XLOOKUP()` | Modern flexible lookup | `=XLOOKUP(lookup_value,lookup_array,return_array,"Not Found",0)` |
| `VLOOKUP()` | Vertical lookup | `=VLOOKUP(lookup_value,table_array,col_index,FALSE)` |
| `HLOOKUP()` | Horizontal lookup | `=HLOOKUP(lookup_value,table_array,row_index,FALSE)` |
| `INDEX/MATCH` | Flexible lookup | `=INDEX(return_range,MATCH(lookup_value,lookup_range,0))` |
| `OFFSET()` | Dynamic ranges | `=OFFSET(reference,rows,cols,height,width)` |

## Statistical Functions

| Function | Purpose | Example |
|----------|---------|---------|
| `AVERAGE()`, `MEDIAN()`, `MODE.SNGL()` | Central tendency | `=AVERAGE(A2:A10)` |
| `STDEV.P()`, `VAR.P()` | Variation (population) | `=STDEV.P(A2:A10)` |
| `STDEV.S()`, `VAR.S()` | Variation (sample) | `=STDEV.S(A2:A10)` |
| `PERCENTILE.INC()` | Find values at percentiles | `=PERCENTILE.INC(A2:A10,0.9)` |
| `QUARTILE.INC()` | Find values at quartiles | `=QUARTILE.INC(A2:A10,1)` |
| `RANK.EQ()` | Rank values | `=RANK.EQ(A2,A$2:A$10)` |
| `CORREL()` | Correlation coefficient | `=CORREL(A2:A10,B2:B10)` |
| `FORECAST.LINEAR()` | Linear prediction | `=FORECAST.LINEAR(x,known_y,known_x)` |

## Financial Analysis

| Function | Purpose | Example |
|----------|---------|---------|
| `NPV()` | Net present value | `=NPV(rate,cashflow1,cashflow2,...)` |
| `IRR()` | Internal rate of return | `=IRR(values,guess)` |
| `PMT()` | Loan payment calculation | `=PMT(rate,nper,pv,fv,type)` |
| `FV()` | Future value | `=FV(rate,nper,pmt,pv,type)` |
| `PV()` | Present value | `=PV(rate,nper,pmt,fv,type)` |
| `SLN()` | Straight-line depreciation | `=SLN(cost,salvage,life)` |

## Time Series Analysis

| Function | Purpose | Example |
|----------|---------|---------|
| `TREND()` | Linear regression prediction | `=TREND(known_y,known_x,new_x)` |
| `GROWTH()` | Exponential growth prediction | `=GROWTH(known_y,known_x,new_x)` |
| `FORECAST.ETS()` | Time series forecasting | `=FORECAST.ETS(target_date,values,timeline,seasonality)` |
| `FORECAST.ETS.SEASONALITY()` | Detect seasonality | `=FORECAST.ETS.SEASONALITY(values,timeline)` |

## Pivot Table Quick Tips

1. **Group Data**: Right-click on any field → Group
2. **Calculated Fields**: PivotTable Tools → Analyze → Calculations → Fields, Items & Sets → Calculated Field
3. **Show Values As**: Right-click on value field → Show Values As → % of Total/Running Total/Rank
4. **Slicers**: PivotTable Tools → Analyze → Insert Slicer
5. **Drill Down**: Double-click on any value cell
6. **Pivot Charts**: PivotTable Tools → Analyze → PivotChart

## Power Query Techniques

1. **Import Data**: Data tab → Get Data
2. **Clean Steps**:
   - Remove columns: Select columns → right-click → Remove
   - Filter data: Click filter icon → select values
   - Change type: Select column → Transform tab → Data Type
   - Split column: Select column → Transform tab → Split Column
3. **Combine Data**:
   - Append queries: Home tab → Append Queries
   - Merge queries: Home tab → Merge Queries
4. **Group Data**: Transform tab → Group By
5. **Pivot/Unpivot**: Transform tab → Pivot Column/Unpivot Columns
6. **Add Custom Column**: Add Column tab → Custom Column → Enter formula

## DAX Measures (for Power Pivot)

```
// Simple sum
Total Sales = SUM(Sales[Amount])

// Calculated ratio
Profit Margin = DIVIDE([Total Profit],[Total Sales])

// Year-to-date
Sales YTD = TOTALYTD([Total Sales],Calendar[Date])

// Previous year
Sales PY = CALCULATE([Total Sales],SAMEPERIODLASTYEAR(Calendar[Date]))

// Year-over-year growth
YOY Growth = DIVIDE([Total Sales]-[Sales PY],[Sales PY])

// Running total
Running Total = 
CALCULATE(
    [Total Sales],
    FILTER(
        ALLSELECTED(Calendar),
        Calendar[Date] <= MAX(Calendar[Date])
    )
)
```
