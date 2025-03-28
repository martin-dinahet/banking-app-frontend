import React from "react";

import { Card } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Expense } from "@/lib/expenses";
import { DollarSign, Home, Wallet } from "lucide-react";
import { PlusCircle } from "lucide-react";
import { Tag } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Select } from "@/components/ui/select";
import { SelectTrigger } from "@/components/ui/select";
import { SelectValue } from "@/components/ui/select";
import { SelectContent } from "@/components/ui/select";
import { SelectItem } from "@/components/ui/select";
import { categories } from "@/lib/categories";

import { toast } from "sonner";

export const NewExpense: React.FC = () => {
  const [expenses, setExpenses] = React.useState<Array<Expense>>([]);
  const [amount, setAmount] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const [category, setCategory] = React.useState<string>("");

  React.useEffect(() => {
    const savedExpenses = localStorage.getItem("expenses");
    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const saveExpense = () => {
    if (!amount || !description || !category) {
      toast.error("Please fill in all fields");
      return;
    }
    const newExpense: Expense = {
      id: crypto.randomUUID(),
      amount: parseFloat(amount),
      description,
      category,
    };
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    const selectedCategory = categories.find((c) => c.value === category);
    toast.success("Expense added successfully", {
      description: `${selectedCategory?.label.split(" ")[0]}$${amount} - ${description}`,
    });
    setAmount("");
    setDescription("");
    setCategory("");
  };

  return (
    <>
      <main className="flex justify-center items-center p-4">
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-500" />
              Add New Expense
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  className="pl-10"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <div className="relative">
                <Tag className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  id="description"
                  placeholder="Enter expense description"
                  className="pl-10"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <Button className="w-full" onClick={saveExpense}>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Expense
            </Button>
          </CardContent>
          <CardFooter className="pt-4 flex gap-4">
            <Button variant="default" asChild>
              <div>
                <Wallet />
                <NavLink to="/expenses">My expenses</NavLink>
              </div>
            </Button>
            <Button variant="secondary" asChild>
              <div>
                <Home />
                <NavLink to="/">Home</NavLink>
              </div>
            </Button>
          </CardFooter>
        </Card>
      </main>
    </>
  );
};
