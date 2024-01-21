import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const diff = Math.floor((now.getTime() - createdAt.getTime()) / 1000);

  const seconds = diff;
  const minutes = Math.floor(diff / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 1) {
    return `${years} Years ago`;
  } else if (months > 1) {
    return `${months} Months ago`;
  } else if (weeks > 1) {
    return `${weeks} Weeks ago`;
  } else if (days > 1) {
    return `${days} Days ago`;
  } else if (hours > 1) {
    return `${hours} Hours ago`;
  } else if (minutes > 1) {
    return `${minutes} Minutes ago`;
  } else {
    return `${seconds} Seconds ago`;
  }
};

export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    const millions = (num / 1000000).toFixed(2);
    return millions.endsWith('.00') ? `${millions.slice(0, -3)}M` : `${millions}M`;
  } else if (num >= 1000) {
    const thousands = (num / 1000).toFixed(2);
    return thousands.endsWith('.00') ? `${thousands.slice(0, -3)}K` : `${thousands}K`;
  } else {
    return `${num}`;
  }
};



