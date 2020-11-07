import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActivePlayer from "./with-active-player";
import {SimpleMockComponent} from "../../test-data";

configure({adapter: new Adapter()});

const MockComponentWrapped = withActivePlayer(SimpleMockComponent);

it.skip(`State activePlayerId should be -1 when is not active`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  expect(wrapper.state().activePlayerId).toEqual(-1);
});
