import React, { ReactNode, memo, useEffect, useState } from 'react';
import * as S from './styles';

interface TabProps {
  onTabSelected: (index: number) => void;
  children: ReactNode;
}

interface TabContentProps {
  selectedTab: number;
  tabToShow: number;
  children: ReactNode;
}

interface TabItemProps {
  children: ReactNode;
}

const Tab = ({ children, onTabSelected }: TabProps) => {
  const [itemId, setItemId] = useState(0);

  useEffect(() => {
    onTabSelected && onTabSelected(itemId);
  }, [itemId, onTabSelected]);

  return (
    <S.TabContainer>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child as React.ReactElement, {
          onClick: () => {
            setItemId(index);
          },
          $selected: itemId === index,
        });
      })}
    </S.TabContainer>
  );
};

export const TabContent = ({
  children,
  selectedTab,
  tabToShow,
}: TabContentProps) => {
  const [itemId, setItemId] = useState(0);

  useEffect(() => {
    selectedTab && setItemId(selectedTab);
  }, [itemId, selectedTab]);

  return (
    <>{selectedTab === tabToShow && <S.TabContent>{children}</S.TabContent>}</>
  );
};

export const TabItem = memo(({ children, ...restProps }: TabItemProps) => (
  <S.TabItem {...restProps}>{children}</S.TabItem>
));

export default Tab;
