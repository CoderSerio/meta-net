import { useState } from "react"
import { Tabs, Typography } from '@arco-design/web-react';
const TabPane = Tabs.TabPane;
import styles from './index.module.less'

const Popup = () => {
  const [data, setData] = useState("")
  const [activeTabKey, setActiveTabKey] = useState<string>('1')

  const handleTabChange = (tabKey: string) => {
    debugger
    setActiveTabKey(tabKey)
  }

  return (
    <div className={styles['wrapper']}>
      <Tabs activeTab={activeTabKey} onChange={handleTabChange} className={styles['tabs']}>
        
        <TabPane key='1' title='登录'>
          <div>123</div>
        </TabPane>
        
        <TabPane key='2' title='游戏'>
          <div>23</div>
        </TabPane>

        <TabPane key='3' title='设置'>
          <div>345</div>
        </TabPane>
      
      </Tabs>
    </div>
  )
}

export default Popup
