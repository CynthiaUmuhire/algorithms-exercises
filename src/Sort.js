import React from "react";
import { shuffle, range } from "lodash";
import { App, snapshot, done, clear } from "./sort-visualizer";

import "./sort.css";

function sort(nums) {
  /* BUBBLE SORT
   let hasSwapped = true;
   do {
    hasSwapped = false;
    for (let i = 0; i < nums.length; i++) {
      snapshot(nums);
      if (nums[i + 1] < nums[i]) {
        const temp = nums[i + 1];
        nums[i + 1] = nums[i];
        nums[i] = temp;
        hasSwapped = true;
      }
    }
  } while (hasSwapped);
   return nums; }
   */
  // INSERTION SORT
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j >= 0; j--) {
      snapshot(nums)
      if (j === 0) continue
      if (nums[j] < nums[j - 1]) {
        const temp = nums[j - 1]
        nums[j - 1] = nums[j]
        nums[j] = temp
      } else {
        continue
      }
    }
     snapshot(nums)
  }
  return nums
}


export default function SortComponent() {
  clear();
  sort(shuffle(range(10)));
  done();
  return <App />;
}
