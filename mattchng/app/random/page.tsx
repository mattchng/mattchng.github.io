"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RandomPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/interests");
  }, [router]);
  return null;
}