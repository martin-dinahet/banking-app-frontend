import React, { useEffect } from "react";

import { Table } from "@/components/ui/table";
import { TableBody } from "@/components/ui/table";
import { TableCaption } from "@/components/ui/table";
import { TableCell } from "@/components/ui/table";
import { TableHead } from "@/components/ui/table";
import { TableHeader } from "@/components/ui/table";
import { TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { LayoutDashboard } from "lucide-react";
import { Expense } from "@/lib/expenses";

export const ExpenseList: React.FC = () => {
  const [expenses, setExpenses] = React.useState<Array<Expense>>([]);

  useEffect(() => {
    const savedExpenses = localStorage.getItem("expenses");
    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    }
  }, []);

  return (
    <>
      <main className="flex justify-center items-center p-4">
        <Card className="w-[400px] md:w-[600px] lg:w-[800px]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LayoutDashboard className="h-5 w-5 text-green-500" />
              My Expenses
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="overflow-x-auto">
              <Table className="min-w-full">
                <TableCaption>Recent expenses</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="px-4 py-2">Amount</TableHead>
                    <TableHead className="px-4 py-2">Description</TableHead>
                    <TableHead className="px-4 py-2">Category</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {expenses.length > 0 ? (
                    expenses.map((expense) => (
                      <TableRow key={expense.id} className="border-b">
                        <TableCell className="px-4 py-2">{expense.amount.toFixed(2)}</TableCell>
                        <TableCell className="px-4 py-2">{expense.description}</TableCell>
                        <TableCell className="px-4 py-2">{expense.category}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={3} className="text-center px-4 py-2">
                        No expenses found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </main>
    </>
  );
};
