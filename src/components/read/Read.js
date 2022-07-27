import React from 'react';
import { Card, Icon, Label, Menu, Table, Button } from 'semantic-ui-react';


function Read() {
  return (
      <>
          <h2>Earnest</h2>
          <button class="ui button">Click Here</button>
          <table class="ui celled table"><thead class=""><tr class=""><th class="">Header</th><th class="">Header</th><th class="">Header</th></tr></thead><tbody class=""><tr class=""><td class=""><div class="ui ribbon label">First</div></td><td class="">Cell</td><td class="">Cell</td></tr><tr class=""><td class="">Cell</td><td class="">Cell</td><td class="">Cell</td></tr><tr class=""><td class="">Cell</td><td class="">Cell</td><td class="">Cell</td></tr></tbody><tfoot class=""><tr class=""><th colSpan="3" class=""><div class="ui pagination right floated menu"><a class="icon item"><i aria-hidden="true" class="chevron left icon"></i></a><a class="item">1</a><a class="item">2</a><a class="item">3</a><a class="item">4</a><a class="icon item"><i aria-hidden="true" class="chevron right icon"></i></a></div></th></tr></tfoot></table>
          <div class="ui card"><div class="image"><img src="/images/avatar/large/elliot.jpg"/></div><div class="content"><div class="header">Elliot Baker</div><div class="meta">Friend</div><div class="description">Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.</div></div><div class="extra content"><a><i aria-hidden="true" class="user icon"></i>16 Friends</a></div></div>
      </>
      
      
  )
}

export default Read