import React from "react";

import { Card } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { CardDescription } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { Plus } from "lucide-react";

export const Index: React.FC = () => {
  return (
    <>
      <main className="flex justify-center items-center p-4">
        <Card className="max-w-[40rem]">
          <CardHeader>
            <CardTitle>Banking App</CardTitle>
            <CardDescription>You won't get rich with this one</CardDescription>
          </CardHeader>
          <CardContent>
            A totally fake banking app. Sadly, you can’t get rich here. Built with React,
            TypeScript, and other fancy tech to make it look and feel like the real deal (minus the
            actual money). It’s simple, fast, and works like a charm… most of the time.
          </CardContent>
          <CardFooter className="flex gap-4">
            {/* TODO replace this with the "New Expense" component */}
            <Button variant="default" asChild>
              <div>
                <Plus /> New Expense
              </div>
            </Button>
            {/* TODO replace this with "My Expenses" component*/}
            <Button variant="secondary" asChild>
              <div>
                <Wallet />
                My Expenses
              </div>
            </Button>
          </CardFooter>
        </Card>
      </main>
    </>
  );
};
