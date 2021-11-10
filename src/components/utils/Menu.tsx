import React from "react";
import { Dropdown, Menu } from "antd";

interface MenuProps {
  items: string[];
  clickHandler: (optionName: string, value: any) => void;
  name: string;
}

const MenuContainer: React.FC<MenuProps> = ({ items, clickHandler, name }) => {
  return (
    <Dropdown
      overlay={
        <Menu>
          {items.map((item, index) => (
            <Menu.Item key={index} onClick={() => clickHandler(item, name)}>
              {item}
            </Menu.Item>
          ))}
        </Menu>
      }
    >
      {name}
    </Dropdown>
  );
};

export default MenuContainer;
