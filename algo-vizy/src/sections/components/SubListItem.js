import React, { useState } from 'react';

import Modal from '../../shared/components/UIElements/Modal';
import './SubListItem.css';

function SubListItem(props) {
  const [showContent, setShowContent] = useState(false);

  const openContentHandler = () => setShowContent(true);
  const closeContentHandler = () => setShowContent(false);

  const DUMMY_TEXT =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean viverra purus ex, in tempor sapien varius sit amet. Sed egestas massa arcu, id tempus leo viverra a. Nulla non elit vel enim cursus euismod. Aliquam dictum lectus sit amet scelerisque bibendum. Integer auctor arcu non odio sodales, nec placerat purus viverra. Pellentesque interdum urna vitae purus efficitur rhoncus. Sed risus ex, finibus fermentum ultrices vitae, imperdiet eget velit. Sed vestibulum viverra semper. Nulla luctus iaculis sapien, et pretium neque dictum a. Duis dui mauris, aliquam sed dapibus sit amet, blandit ut sapien. Aenean ultrices mattis dolor, ut placerat mauris placerat eget. Aliquam imperdiet gravida lacus, vel rhoncus erat condimentum ac. Aliquam pretium lectus eget libero sagittis, ac consequat metus volutpat. Vivamus erat odio, commodo mattis enim vel, suscipit molestie leo. Nunc id ipsum eget est vehicula varius. Nullam imperdiet augue elit. Quisque convallis urna eget pharetra rutrum. Suspendisse et nisl id tellus tempus varius. Nunc malesuada feugiat semper. Phasellus quis gravida diam. Integer interdum massa risus, eu congue elit fringilla at. Quisque maximus massa faucibus luctus facilisis. Fusce pulvinar vel ligula a luctus. Duis lobortis diam feugiat ipsum aliquam, quis iaculis nulla cursus. Duis eu elit nisi. Fusce blandit suscipit enim, sed efficitur augue semper eu. Fusce et tortor ut lorem pulvinar ultricies a ut sem. Aenean suscipit neque orci, nec cursus est semper a. Cras quis lacinia elit. Cras scelerisque libero neque, nec consectetur massa ornare id. Sed venenatis placerat dolor. In in est eget erat pulvinar vulputate tempus vel dui. Sed faucibus congue tincidunt. Mauris rutrum urna velit. Donec ac mauris sed magna luctus commodo. Pellentesque efficitur massa sit amet est ultricies consectetur. Etiam eget quam non dolor iaculis molestie. Donec ut lectus dictum, rutrum sapien a, porttitor ex. Donec sit amet urna nec purus scelerisque dictum. Suspendisse potenti. Integer eget risus convallis mauris mollis elementum. Integer venenatis maximus pulvinar. Sed pharetra diam at dapibus mattis. Sed viverra pretium elit, at accumsan odio sagittis in. Aliquam tincidunt leo in congue faucibus. Proin quis nunc nulla. Fusce dui sem, venenatis in leo sit amet, ullamcorper posuere est. Proin a mauris mattis, molestie erat quis, mollis sem. Sed mattis, est et condimentum tincidunt, enim neque malesuada erat, eu condimentum justo felis at lorem. Sed vitae dapibus ipsum, dignissim porta erat. Vivamus ornare viverra leo, eu finibus velit sagittis iaculis. Praesent nec erat eu libero porttitor tincidunt. Sed maximus sapien eu ipsum dapibus, at vehicula nibh convallis. Etiam libero mauris, suscipit ac tincidunt non, sodales non nibh. Praesent metus enim, tempor sit amet aliquam et, posuere id elit. Vestibulum eu mi id purus ornare tincidunt id vel arcu. Ut gravida sed massa quis pretium. Donec tincidunt velit libero, sit amet rhoncus sapien elementum quis.';

  return (
    <React.Fragment>
      <Modal
        show={showContent}
        onCancel={closeContentHandler}
        header={props.name}
        contentClass='sub-section__content'
        footerClass='sub-section__modal-actions'
        footer={<button onClick={closeContentHandler}>CLOSE</button>}
      >
        <div className='content-container'>{DUMMY_TEXT}</div>
      </Modal>
      <li className='sub-sections-list-item'>
        <button className='sub-section-button' onClick={openContentHandler}>
          <h4 className='sub-section-button__text'>{props.name}</h4>
        </button>
      </li>
    </React.Fragment>
  );
}

export default SubListItem;
