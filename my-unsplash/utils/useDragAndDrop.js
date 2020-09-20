import React from 'react';
export default function useDragAndDrop(uploadFn) {
  const containerRef = React.useRef(null);
  const [dragState, setState] = React.useState('');
  const preventDefaults = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handelDragEnter = (e) => {
    preventDefaults(e);
    setState('dragenter');
  };
  const handelDragEnd = (e) => {
    preventDefaults(e);
    setState('dragend');
  };
  const handelDragDrop = (e) => {
    preventDefaults(e);
    setState('drop');
    uploadFn(e.dataTransfer.files[0]);
  };

  React.useEffect(() => {
    const node = containerRef.current;
    console.log('container:', node);
    if (node) {
      console.log('add listeners');
      node.addEventListener('drag', preventDefaults);
      node.addEventListener('dragstart', preventDefaults);
      node.addEventListener('dragover', handelDragEnter);
      node.addEventListener('dragenter', handelDragEnter);
      node.addEventListener('dragleave', handelDragEnd);
      node.addEventListener('dragend', handelDragEnd);
      node.addEventListener('drop', handelDragDrop);

      return () => {
        node.removeEventListener('drag', preventDefaults);
        node.removeEventListener('dragstart', preventDefaults);
        node.removeEventListener('dragover', handelDragEnter);
        node.removeEventListener('dragenter', handelDragEnter);
        node.removeEventListener('dragleave  ', handelDragEnd);
        node.removeEventListener('dragend', handelDragEnd);
        node.removeEventListener('drop', handelDragDrop);
      };
    }
  }, [containerRef.current]);

  return [containerRef, dragState];
}
