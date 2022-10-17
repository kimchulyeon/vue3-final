import { mount } from "@vue/test-utils";
import { describe, it } from "vitest";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays logo name", () => {
    const wrapper = mount(MainNav);
    console.log(wrapper);
    console.log(wrapper.html());
  });
});
