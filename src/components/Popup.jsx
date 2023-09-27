
import React, { useRef, useState } from 'react';
import {
  Navbar,
  Page,
  Popup,
  BlockTitle,
  Block,
  NavRight,
  Link,
  Button,
  View,
  f7,
} from 'framework7-react';

export default () => {
  const [popupOpened, setPopupOpened] = useState(false);
  const popup = useRef(null);

  const createPopup = () => {
    // Create popup
    if (!popup.current) {
      popup.current = f7.popup.create({
        content: `
          <div class="popup">
            <div class="page">
              <div class="navbar">
                <div class="navbar-inner">
                  <div class="navbar-bg"></div>
                  <div class="title">Dynamic Popup</div>
                  <div class="right"><a  class="link popup-close">Close</a></div>
                </div>
              </div>
              <div class="page-content">
                <div class="block">
                  <p>This popup was created dynamically</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse a faucibus lectus.</p>
                </div>
              </div>
            </div>
          </div>
        `.trim(),
      });
    }
    // Open it
    popup.current.open();
  };

  const onPageBeforeRemove = () => {
    // Destroy popup when page removed
    if (popup.current) popup.current.destroy();
  };
  return (
    <Page onPageBeforeRemove={onPageBeforeRemove}>
      
    </Page>
  );
};