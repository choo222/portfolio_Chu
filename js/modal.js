// Contact - thank-btn, modal close-btn
$(document).ready(function(){

  $(".thank").click(function(){
    $(".contact-modal").fadeIn();
  });

  $(".close-btn").click(function(){
    $(".modal").fadeOut();
  });
  $(".modal-bg").click(function(){
    $(".modal").fadeOut();
  });
});

// uxui, view design modal
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.querySelector('.view-modal');
  const modalBg = document.querySelector('.view-modal-bg');
  const modalContainer = document.querySelector('.view-modal-container');
  const modalContents = document.querySelectorAll('.view-modal-content');
  const openTriggers = document.querySelectorAll('[data-modal-open]');
  const closeBtn = document.querySelector('.close-btn');
  const upIcon = document.querySelector('.up-icon');
  const leftIcon = document.querySelector('.left-icon');
  const rightIcon = document.querySelector('.right-icon');

  let currentViewId = null;
  
  function openModal(viewId) {
    currentViewId = parseInt(viewId);

    modalContents.forEach(content => {
      content.style.display = 'none';
    });
    
    const targetContent = document.querySelector(`[data-view-id="${viewId}"]`);
    if (targetContent) {
      targetContent.style.display = 'block';
    }
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    modalContainer.scrollTop = 0;

    updateNavigationVisibility();
  }
  
  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  function scrollToTop() {
    modalContainer.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  function navigatePrev() {
    if (currentViewId >= 7 && currentViewId <= 12) {
      let prevId = currentViewId - 1;
      
      if (prevId < 7) {
        prevId = 12;
      }
      
      openModal(prevId);
    }
  }
  
  function navigateNext() {
    if (currentViewId >= 7 && currentViewId <= 12) {
      let nextId = currentViewId + 1;
      
      if (nextId > 12) {
        nextId = 7;
      }
      
      openModal(nextId);
    }
  }
  
  function updateNavigationVisibility() {
    if (leftIcon && rightIcon) {
      if (currentViewId >= 7 && currentViewId <= 12) {
        leftIcon.style.display = 'flex';
        rightIcon.style.display = 'flex';
      } else {
        leftIcon.style.display = 'none';
        rightIcon.style.display = 'none';
      }
    }
  }
  
  openTriggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
      const viewId = this.getAttribute('data-modal-open');
      openModal(viewId);
    });
  });
  
  modalBg.addEventListener('click', closeModal);
  closeBtn.addEventListener('click', closeModal);
  
  document.addEventListener('keydown', function(e) {
    if (modal.style.display === 'block') {
      if (e.key === 'Escape') {
        closeModal();
      }
      else if (e.key === 'ArrowLeft') {
        navigatePrev();
      }
      else if (e.key === 'ArrowRight') {
        navigateNext();
      }
    }
  });

  if (upIcon) {
    upIcon.addEventListener('click', function(e) {
      e.stopPropagation();
      scrollToTop();
    });
  };

  if (leftIcon) {
    leftIcon.addEventListener('click', function(e) {
      e.stopPropagation();
      navigatePrev();
    });
  }
  
  if (rightIcon) {
    rightIcon.addEventListener('click', function(e) {
      e.stopPropagation();
      navigateNext();
    });
  }

});