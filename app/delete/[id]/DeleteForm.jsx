"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function DeleteForm({ taskData }) {
  const router = useRouter();
  const apiUrl = `/api/tasks/delete/${taskData.id}`;

  async function deleteBtn(e) {
    e.preventDefault();
    await fetch(apiUrl, { method: "DELETE" });
    router.push("/tasks");
  }

  return (
    <Card className="w-[550px]">
      <CardHeader>
        <CardTitle>Delete Your Task</CardTitle>
        <CardDescription>Are you sure you want to delete?</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Task</Label>
              <Input id="task" value={taskData.task} readOnly />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="priority">Priority</Label>
              <Input id="priority" value={taskData.Priority} readOnly />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="status">Status</Label>
              <Input id="status" value={taskData.Status} readOnly />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href="/tasks">
          <Button variant="outline">Cancel</Button>
        </Link>
        <Button className="hover:bg-red-500" onClick={deleteBtn}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
