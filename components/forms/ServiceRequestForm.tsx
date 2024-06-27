"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { issueTypes, subIssueTypes } from "@/utils/service-issues-list";
import { toast } from "sonner";

const formSchema = z.object({
  issueType: z.string().min(1, "Please select an issue type"),
  subIssueType: z.string().min(1, "Please select an issue"),
  comments: z.string().optional(),
});

export function ServiceRequestForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      issueType: "",
      subIssueType: "",
      comments: "",
    },
  });

  const subtype = form.watch("issueType");
  const subtypeList = subIssueTypes[subtype] || [];

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Service request submitted successfully", {
      richColors: true,
      cancel: true,
      // duration: 5000,
    });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="issueType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Whats the type of issue?</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Please Select an Issue Type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {issueTypes.map((issueType) => (
                    <SelectItem key={issueType} value={issueType}>
                      {issueType}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subIssueType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Whats the issue is?</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select the issue" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {subtypeList.map((issueType) => (
                    <SelectItem key={issueType} value={issueType}>
                      {issueType}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="comments"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comments</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us more about your request..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
