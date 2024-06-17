"use server";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function revalidateAllEvents() {
  revalidateTag("all-events");
}

export async function revalidateLatestScreening() {
  revalidateTag("latest-screening");
}
