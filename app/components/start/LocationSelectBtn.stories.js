import LocationSelectBtn from "./LocationSelectBtn";

export default {
  component: LocationSelectBtn,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export const SeoulSelectBtn = {
  args: {
    label: "명륜",
    hoverColor: "#50CFB1",
  },
};

export const SuwonSelectBtn = {
  args: {
    label: "율전",
    hoverColor: "#80A4FF",
  },
};
