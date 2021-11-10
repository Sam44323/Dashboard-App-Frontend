import React from "react";
import { Dropdown, Menu, Button } from "antd";

interface MenuProps {
  items: string[];
  clickHandler: (optionName: string, value: any) => void;
  name: string;
}

const MenuContainer: React.FC<MenuProps> = ({ items, clickHandler, name }) => {
  return (
    <Dropdown
      placement="bottomLeft"
      arrow
      overlay={
        <Menu>
          {items.map((item, index) => (
            <Menu.Item
              key={index}
              onClick={() =>
                clickHandler(name === "students" ? item.slice(1) : item, name)
              }
            >
              {item}
            </Menu.Item>
          ))}
        </Menu>
      }
    >
      <Button
        type="primary"
        style={{
          textTransform: "capitalize",
        }}
      >
        {name}
      </Button>
    </Dropdown>
  );
};

export default MenuContainer;
