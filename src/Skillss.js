import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default () => (
  <div className="skills">
    <div className="skills_container bb">
      <h2 className="skills_title">SKILLS</h2>
      <Tabs>
        <TabList>
          <Tab>Programming</Tab>
          <Tab>Operating System </Tab>
          <Tab>Networking</Tab>
          <Tab>Tools</Tab>
          <Tab>Cyber Security</Tab>
        </TabList>

        <TabPanel className="tabPanel">
          <div className="icon_panels">
            <img
              src="https://seeklogo.com/images/C/c-programming-language-logo-9B32D017B1-seeklogo.com.png"
              alt=""
              className="icon_logo"
            />
            <p className="icon_name">C</p>
          </div>

          <div className="icon_panels">
            <img
              src="https://seeklogo.com/images/C/c-logo-43CE78FF9C-seeklogo.com.png"
              alt=""
              className="icon_logo"
            />
            <p className="icon_name">C++</p>
          </div>
          <div className="icon_panels">
            <img
              src="https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png"
              alt=""
              className="icon_logo"
            />
            <p className="icon_name">Python</p>
          </div>
          <div className="icon_panels">
            <img
              src="https://seeklogo.com/images/K/kotlin-logo-4EA4DB3A08-seeklogo.com.png"
              alt=""
              className="icon_logo"
            />
            <p className="icon_name">Kotlin</p>
          </div>
          <div className="icon_panels">
            <img
              src="https://seeklogo.com/images/J/java-logo-7F8B35BAB3-seeklogo.com.png"
              alt=""
              className="icon_logo"
            />
            <p className="icon_name">Java</p>
          </div>
        </TabPanel>
        <TabPanel className="tabPanel">
          <div className="icon_panels">
            <img
              src="https://seeklogo.com/images/U/ubuntu-linux-logo-A8280F4D05-seeklogo.com.png"
              alt=""
              className="icon_logo"
            />
            <p className="icon_name">Ubuntu</p>
          </div>
          <div className="icon_panels">
            <img
              src="https://seeklogo.com/images/W/windows-10-icon-logo-5BC5C69712-seeklogo.com.png"
              alt=""
              className="icon_logo"
            />
            <p className="icon_name">Windows</p>
          </div>
          <div className="icon_panels">
            <img
              src="https://seeklogo.com/images/L/Linux_Tux-logo-DA252F3C21-seeklogo.com.png"
              alt=""
              className="icon_logo"
            />
            <p className="icon_name">Linux</p>
          </div>
          <div className="icon_panels">
            <img
              src="https://seeklogo.com/images/A/android-logo-9E4539A7DE-seeklogo.com.png"
              alt=""
              className="icon_logo"
            />
            <p className="icon_name">Android</p>
          </div>
        </TabPanel>
        <TabPanel className="tabPanel">
          <div className="icon_panels">
            <p className="icon_name">TCP/IP Configuration</p>
          </div>
          <div className="icon_panels">
            <p className="icon_name">IP4/IPV6 Configuration</p>
          </div>
          <div className="icon_panels">
            <p className="icon_name">Network Architecture</p>
          </div>
          <div className="icon_panels">
            <p className="icon_name">OSI Models</p>
          </div>
        </TabPanel>
        <TabPanel className="tabPanel">
          <div className="icon_panels">
            <p className="icon_name">Burpsuite</p>
          </div>
          <div className="icon_panels">
            <p className="icon_name">Aircrack-ng</p>
          </div>
          <div className="icon_panels">
            <p className="icon_name">N-map</p>
          </div>
          <div className="icon_panels">
            <p className="icon_name">Wireshark</p>
          </div>
          <div className="icon_panels">
            <p className="icon_name">DHCPig</p>
          </div>
          <div className="icon_panels">
            <p className="icon_name">Beef</p>
          </div>
          <div className="icon_panels">
            <p className="icon_name">Backdoor Factory</p>
          </div>
        </TabPanel>
        <TabPanel className="tabPanel">
          <div className="icon_panels">
            <p className="icon_name">Android Security</p>
          </div>
          <div className="icon_panels">
            <p className="icon_name">Network Security</p>
          </div>
          <div className="icon_panels">
            <p className="icon_name">Website Security</p>
          </div>
          <div className="icon_panels">
            <p className="icon_name">Application Security</p>
          </div>
          <div className="icon_panels">
            <p className="icon_name">Android Development Front End with XML</p>
          </div>
          <div className="icon_panels">
            <p className="icon_name">
              Backend Management with Firebase Realtime database
            </p>
          </div>
          <div className="icon_panels">
            <p className="icon_name">Authentication</p>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  </div>
);
