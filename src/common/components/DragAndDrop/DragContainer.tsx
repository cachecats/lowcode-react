import React from 'react';
import {
  Draggable,
  DraggableId,
  DraggableProvided,
  DraggableStateSnapshot
} from 'react-beautiful-dnd';

interface DragContainerProps {
  draggableId: DraggableId;
  index: number;
  className?: string;
  onClick?: () => void;
  isDragDisabled?: boolean;
}

const DragContainer: React.FC<DragContainerProps> = ({
  draggableId,
  index,
  children,
  className,
  onClick,
  isDragDisabled
}) => (
  <Draggable draggableId={draggableId} index={index} isDragDisabled={isDragDisabled}>
    {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className={className}
        onClick={onClick}
      >
        {children}
      </div>
    )}
  </Draggable>
);

export default DragContainer;
