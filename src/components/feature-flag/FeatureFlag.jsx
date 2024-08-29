import React from 'react';
import LightDarkMode from '../light-dark-mode/LightDarkMode';
import TicTacToe from '../tic-tact-toe/TicTacToe';
import RandomColorGen from '../random-color/RandomColorGen';
import Accordion from '../accordion/accordion';
import TreeView from '../tree-view/TreeView';
import CustomTabs from '../custom-tabs/CustomTabs';
import { useFeatureFlag } from './FeatureFlagsContext';

const FeatureFlag = () => {
  const { loading, enabledFlags } = useFeatureFlag();

  const componentsToRender = [
    { key: "showLightAndDarkMode", component: LightDarkMode },
    { key: "showTicTacToeBoard", component: TicTacToe },
    { key: "showRandomColorGenerator", component: RandomColorGen },
    { key: "showAccordion", component: Accordion },
    { key: "showTreeView", component: TreeView },
    { key: 'showTabs', component: CustomTabs }
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if (loading) return <h1>Loading data ! Please wait</h1>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map(({ key, component: Component }) =>
        enabledFlags[key] ? <Component key={key} /> : null
      )}
    </div>
  )
}

export default FeatureFlag