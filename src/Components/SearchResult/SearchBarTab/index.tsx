import { All, Images, Maps, Settings, Videos } from "@/Constant";
import { SearchBarTabProps } from "@/Type/SearchResult";
import { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const SearchBarTab = ({ callbackActive }: SearchBarTabProps) => {
  const [activeTab, setActiveTab] = useState<string>("1");
  return (
    <Nav tabs className="search-list" id="top-tab" role="tablist">
      <NavItem>
        <NavLink
          className={activeTab === "1" ? "active" : ""}
          onClick={() => {
            setActiveTab("1");
            callbackActive("1");
          }}
        >
          <i className="icon-target"></i>&nbsp;{All}
        </NavLink>
        <div className="material-border"></div>
      </NavItem>
      <NavItem>
        <NavLink
          className={activeTab === "2" ? "active" : ""}
          onClick={() => {
            setActiveTab("2");
            callbackActive("2");
          }}
        >
          <i className="icon-image"></i>&nbsp;{Images}
        </NavLink>
        <div className="material-border"></div>
      </NavItem>
      <NavItem>
        <NavLink
          className={activeTab === "3" ? "active" : ""}
          onClick={() => {
            setActiveTab("3");
            callbackActive("3");
          }}
        >
          <i className="icon-video-clapper"></i>&nbsp;{Videos}
        </NavLink>
        <div className="material-border"></div>
      </NavItem>
      <NavItem>
        <NavLink className={activeTab === "4" ? "active" : ""}>
          <i className="icon-map-alt"></i>&nbsp;{Maps}
        </NavLink>
        <div className="material-border"></div>
      </NavItem>
      <NavItem>
        <NavLink className={activeTab === "5" ? "active" : ""}>
          <i className="icon-settings"></i>&nbsp;{Settings}
        </NavLink>
        <div className="material-border"></div>
      </NavItem>
    </Nav>
  );
};
export default SearchBarTab;
