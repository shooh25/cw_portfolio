import React, { ReactElement, cloneElement, isValidElement } from 'react';
import { MdArrowRightAlt } from "react-icons/md";

type Props = (
  {
    asChild: true;
    children: ReactElement;
  } | (
    { asChild?: false } & React.ComponentPropsWithoutRef<'button'>
  )
)
const Button: React.FC<Props> = ({ asChild = false, children, ...props }) => {
  const shouldActAsChild = asChild && isValidElement(children)

  return (
    cloneElement(
      shouldActAsChild ? (
        (children)
      ) : (
        <button {...props} />
      ), {
      className: 'w-56 h-[50px] 2xl:w-72 2xl:h-[60px] flex justify-between items-center pl-8 pr-5 bg-black text04 text-white text-[14px] sm:text-[16px] 2xl:text-[20px]'
    },
      shouldActAsChild ? children.props.children : children,
      < MdArrowRightAlt color='#ffffff' />
    )
  )
}

export default Button