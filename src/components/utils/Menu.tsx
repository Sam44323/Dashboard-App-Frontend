import React from "react";
import { Dropdown, Menu, Button } from "antd";

interface MenuProps {
  items: string[];
  clickHandler: (optionName: string, value: any) => void;
  name: string;
  sideName: string;
}

const MenuContainer: React.FC<MenuProps> = ({
  items,
  clickHandler,
  name,
  sideName,
}) => {
  return (
    <Dropdown
      placement="bottomLeft"
      arrow
      overlay={
        <Menu>
          {items.map((item, index) => (
            <Menu.Item key={index} onClick={() => clickHandler(name, item)}>
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
        {sideName && <span>({sideName})</span>}
      </Button>
    </Dropdown>
  );
};

export default MenuContainer;
