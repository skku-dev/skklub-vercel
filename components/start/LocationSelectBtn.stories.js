import LocationSelectBtn from "./LocationSelectBtn";

export default {
  title: "components/start/LocationSelectBtn",
  component: LocationSelectBtn,
  argTypes: {
    hoverColor: { control: "color" },
  },
};

const Template = (args) => <LocationSelectBtn {...args} />;

export const SeoulSelectBtn = Template.bind({});
SeoulSelectBtn.args = {
  hoverColor: "#80A4FF",
};

export const SuwonSelectBtn = Template.bind({});
SuwonSelectBtn.args = {
  hoverColor: "#50CFB1",
};
