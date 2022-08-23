import React from 'react';
import {
  Direction,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot
} from 'react-beautiful-dnd';

interface DroppableContainerProps {
  droppableId: string;
  type: string;
  direction?: Direction;
  className?: string;
  isDropDisabled?: boolean;
}

const DroppableContainer: React.FC<DroppableContainerProps> = ({
  droppableId,
  type,
  direction,
  children,
  className,
  isDropDisabled = false
}) => (
  <Droppable
    droppableId={droppableId}
    type={type}
    direction={direction}
    isDropDisabled={isDropDisabled}
  >
    {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
      <div
        ref={provided.innerRef}
        className={className}
        {...provided.droppableProps}
      >
        {children}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
);

export default DroppableContainer;
