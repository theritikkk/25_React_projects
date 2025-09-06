import { useContext } from 'react';
import Accordian from '../accordian';
import LightDarkMode from '../light-dark-mode';
import RandomColor from '../random-color';
import TreeView from '../tree-view';
import { FeatureFlagsContext } from './context';
import menus from '../tree-view/data.js';
import TabsTest from '../custom-tabs/tab-test.jsx';

export default function FeatureFlags() {

    const { loading, enabledFlags } = useContext(FeatureFlagsContext);

    const componentsToRender = [
        { key: 'showLightAndDarkMode', Component: <LightDarkMode /> },
        { key: 'showRandomColorGenerator', Component: <RandomColor /> },
        { key: 'showAccordian', Component: <Accordian /> },
        { key: 'showTreeView', Component: <TreeView menus={menus} /> },
        { key: 'showTabs', Component: <TabsTest /> }
    ];

    function checkEnabledFlags(getCurrentKey) {
        return enabledFlags[getCurrentKey];
    }

    if (loading) return <h1>Loading data. Please wait.</h1>;

    return (
        <div>
            <h1>Feature Flags</h1>
            {
                componentsToRender.map(componentItem =>
                    checkEnabledFlags(componentItem.key) ? (
                        <div key={componentItem.key}>
                            {componentItem.Component}
                        </div>
                    ) : null
                )
            }
        </div>
    );
}
