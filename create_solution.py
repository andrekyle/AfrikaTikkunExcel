import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter
from datetime import datetime, timedelta
import random

# Create a new workbook
wb = openpyxl.Workbook()
ws = wb.active
ws.title = "Excel Exercises Solutions"

# Define some styles
header_font = Font(bold=True, size=12)
cell_border = Border(
    left=Side(style='thin'), 
    right=Side(style='thin'), 
    top=Side(style='thin'), 
    bottom=Side(style='thin')
)
green_fill = PatternFill(start_color="E2EFDA", end_color="E2EFDA", fill_type="solid")
blue_fill = PatternFill(start_color="DDEBF7", end_color="DDEBF7", fill_type="solid")
purple_fill = PatternFill(start_color="E4D7F2", end_color="E4D7F2", fill_type="solid")
orange_fill = PatternFill(start_color="FCE4D6", end_color="FCE4D6", fill_type="solid")
red_fill = PatternFill(start_color="FADBD8", end_color="FADBD8", fill_type="solid")
yellow_fill = PatternFill(start_color="FFF2CC", end_color="FFF2CC", fill_type="solid")
teal_fill = PatternFill(start_color="D0ECE7", end_color="D0ECE7", fill_type="solid")
pink_fill = PatternFill(start_color="F5D7E3", end_color="F5D7E3", fill_type="solid")
indigo_fill = PatternFill(start_color="D6DBDF", end_color="D6DBDF", fill_type="solid")

# Helper function to apply header style
def create_header(row, text, fill):
    cell = ws.cell(row=row, column=1, value=text)
    cell.font = header_font
    cell.fill = fill
    ws.merge_cells(start_row=row, start_column=1, end_row=row, end_column=8)
    cell.alignment = Alignment(horizontal='center')
    for col in range(1, 9):
        ws.cell(row=row, column=col).border = cell_border

# Set column widths
for col in range(1, 10):
    ws.column_dimensions[get_column_letter(col)].width = 15

# Exercise 1: Basic Calculations
current_row = 1
create_header(current_row, "Exercise 1: Basic Calculations", green_fill)
current_row += 1

# A1: 25
ws.cell(row=current_row, column=1, value=25)
ws.cell(row=current_row, column=1).border = cell_border

# A2: 10
current_row += 1
ws.cell(row=current_row, column=1, value=10)
ws.cell(row=current_row, column=1).border = cell_border

# A3: =A1+A2
current_row += 1
ws.cell(row=current_row, column=1, value="=A1+A2")
ws.cell(row=current_row, column=1).border = cell_border

# A4: =A1-A2
current_row += 1
ws.cell(row=current_row, column=1, value="=A1-A2")
ws.cell(row=current_row, column=1).border = cell_border

# A5: =A1*A2
current_row += 1
ws.cell(row=current_row, column=1, value="=A1*A2")
ws.cell(row=current_row, column=1).border = cell_border

# A6: =A1/A2
current_row += 1
ws.cell(row=current_row, column=1, value="=A1/A2")
ws.cell(row=current_row, column=1).border = cell_border

# Exercise 2: Common Functions
current_row += 2
create_header(current_row, "Exercise 2: Common Functions", blue_fill)
current_row += 1

# B1:B10 - random numbers
for i in range(10):
    ws.cell(row=current_row + i, column=2, value=random.randint(1, 100))
    ws.cell(row=current_row + i, column=2).border = cell_border

# B11: =SUM(B1:B10)
ws.cell(row=current_row + 10, column=2, value="=SUM(B1:B10)")
ws.cell(row=current_row + 10, column=2).border = cell_border

# B12: =AVERAGE(B1:B10)
ws.cell(row=current_row + 11, column=2, value="=AVERAGE(B1:B10)")
ws.cell(row=current_row + 11, column=2).border = cell_border

# B13: =MIN(B1:B10)
ws.cell(row=current_row + 12, column=2, value="=MIN(B1:B10)")
ws.cell(row=current_row + 12, column=2).border = cell_border

# B14: =MAX(B1:B10)
ws.cell(row=current_row + 13, column=2, value="=MAX(B1:B10)")
ws.cell(row=current_row + 13, column=2).border = cell_border

# B15: =COUNT(B1:B10)
ws.cell(row=current_row + 14, column=2, value="=COUNT(B1:B10)")
ws.cell(row=current_row + 14, column=2).border = cell_border

current_row += 16  # Move past exercise 2

# Exercise 3: Text Functions
create_header(current_row, "Exercise 3: Text Functions", purple_fill)
current_row += 1

# C1: excel formulas
ws.cell(row=current_row, column=3, value="excel formulas")
ws.cell(row=current_row, column=3).border = cell_border

# C2: =UPPER(C1)
current_row += 1
ws.cell(row=current_row, column=3, value="=UPPER(C1)")
ws.cell(row=current_row, column=3).border = cell_border

# C3: =LOWER(C1)
current_row += 1
ws.cell(row=current_row, column=3, value="=LOWER(C1)")
ws.cell(row=current_row, column=3).border = cell_border

# C4: =PROPER(C1)
current_row += 1
ws.cell(row=current_row, column=3, value="=PROPER(C1)")
ws.cell(row=current_row, column=3).border = cell_border

# C5: =LEN(C1)
current_row += 1
ws.cell(row=current_row, column=3, value="=LEN(C1)")
ws.cell(row=current_row, column=3).border = cell_border

current_row += 2  # Move to next exercise

# Exercise 4: Date and Time
create_header(current_row, "Exercise 4: Date and Time", orange_fill)
current_row += 1

# D1: =TODAY()
ws.cell(row=current_row, column=4, value="=TODAY()")
ws.cell(row=current_row, column=4).border = cell_border

# D2: =NOW()
current_row += 1
ws.cell(row=current_row, column=4, value="=NOW()")
ws.cell(row=current_row, column=4).border = cell_border

# D3: =YEAR(D1)
current_row += 1
ws.cell(row=current_row, column=4, value="=YEAR(D1)")
ws.cell(row=current_row, column=4).border = cell_border

# D4: =MONTH(D1)
current_row += 1
ws.cell(row=current_row, column=4, value="=MONTH(D1)")
ws.cell(row=current_row, column=4).border = cell_border

# D5: =DAY(D1)
current_row += 1
ws.cell(row=current_row, column=4, value="=DAY(D1)")
ws.cell(row=current_row, column=4).border = cell_border

current_row += 2  # Move to next exercise

# Exercise 5: Logical Functions
create_header(current_row, "Exercise 5: Logical Functions", red_fill)
current_row += 1

# E1: 85
ws.cell(row=current_row, column=5, value=85)
ws.cell(row=current_row, column=5).border = cell_border

# E2: =IF(E1>=90,"A",IF(E1>=80,"B",IF(E1>=70,"C",IF(E1>=60,"D","F"))))
current_row += 1
ws.cell(row=current_row, column=5, value='=IF(E1>=90,"A",IF(E1>=80,"B",IF(E1>=70,"C",IF(E1>=60,"D","F"))))')
ws.cell(row=current_row, column=5).border = cell_border

# E3: =AND(E1>80,E1<90)
current_row += 1
ws.cell(row=current_row, column=5, value="=AND(E1>80,E1<90)")
ws.cell(row=current_row, column=5).border = cell_border

# E4: =OR(E1<60,E1>90)
current_row += 1
ws.cell(row=current_row, column=5, value="=OR(E1<60,E1>90)")
ws.cell(row=current_row, column=5).border = cell_border

current_row += 2  # Move to next exercise

# Exercise 6: Lookup Functions
create_header(current_row, "Exercise 6: Lookup Functions", yellow_fill)
current_row += 1

# Create lookup table F1:G4
products = [("Product", "Price"), ("Apple", 1.99), ("Orange", 0.99), ("Banana", 0.59)]
for i, (product, price) in enumerate(products):
    ws.cell(row=current_row + i, column=6, value=product)
    ws.cell(row=current_row + i, column=7, value=price if isinstance(price, (int, float)) else price)
    ws.cell(row=current_row + i, column=6).border = cell_border
    ws.cell(row=current_row + i, column=7).border = cell_border

current_row += len(products) + 1

# F5: Orange
ws.cell(row=current_row, column=6, value="Orange")
ws.cell(row=current_row, column=6).border = cell_border

# F6: =VLOOKUP(F5,F1:G4,2,FALSE)
current_row += 1
ws.cell(row=current_row, column=6, value="=VLOOKUP(F5,F1:G4,2,FALSE)")
ws.cell(row=current_row, column=6).border = cell_border

current_row += 2  # Move to next exercise

# Exercise 7: Conditional Math
create_header(current_row, "Exercise 7: Conditional Math", teal_fill)
current_row += 1

# H1:H5 - 10, 15, 20, 25, 30
values = [10, 15, 20, 25, 30]
for i, val in enumerate(values):
    ws.cell(row=current_row + i, column=8, value=val)
    ws.cell(row=current_row + i, column=8).border = cell_border

current_row += len(values)

# H6: =SUMIF(H1:H5,">20")
ws.cell(row=current_row, column=8, value="=SUMIF(H1:H5,\">20\")")
ws.cell(row=current_row, column=8).border = cell_border

# H7: =COUNTIF(H1:H5,">=20")
current_row += 1
ws.cell(row=current_row, column=8, value="=COUNTIF(H1:H5,\">=20\")")
ws.cell(row=current_row, column=8).border = cell_border

current_row += 2  # Move to next exercise

# Exercise 8: Text Manipulation
create_header(current_row, "Exercise 8: Text Manipulation", pink_fill)
current_row += 1

# I1: John.Doe@example.com
ws.cell(row=current_row, column=9, value="John.Doe@example.com")
ws.cell(row=current_row, column=9).border = cell_border

# I2: =LEFT(I1,FIND("@",I1)-1)
current_row += 1
ws.cell(row=current_row, column=9, value="=LEFT(I1,FIND(\"@\",I1)-1)")
ws.cell(row=current_row, column=9).border = cell_border

# I3: =RIGHT(I1,LEN(I1)-FIND("@",I1))
current_row += 1
ws.cell(row=current_row, column=9, value="=RIGHT(I1,LEN(I1)-FIND(\"@\",I1))")
ws.cell(row=current_row, column=9).border = cell_border

current_row += 2  # Move to next exercise

# Exercise 9: Date Calculations
create_header(current_row, "Exercise 9: Date Calculations", indigo_fill)
current_row += 1

# J1: =TODAY()
ws.cell(row=current_row, column=10, value="=TODAY()")
ws.cell(row=current_row, column=10).border = cell_border

# J2: =J1+30
current_row += 1
ws.cell(row=current_row, column=10, value="=J1+30")
ws.cell(row=current_row, column=10).border = cell_border

# J3: =NETWORKDAYS(J1,J2)
current_row += 1
ws.cell(row=current_row, column=10, value="=NETWORKDAYS(J1,J2)")
ws.cell(row=current_row, column=10).border = cell_border

# Save the workbook
wb.save("/Users/michalsnell/Desktop/formula-ai-excel-main/public/solutions/excel_exercises_solution.xlsx")
print("Excel solution file created successfully!")
