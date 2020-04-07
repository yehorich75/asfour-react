import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({
    children, onClick, className, disabled, active, invert, ...attrs
}) => {
    const onClickAction = e => {
        if (disabled) {
            e.preventDefault();
        } else {
            return onClick(e);
        }
    };

    const classes = classNames(
        'btn',
        className,
        { active },
        { invert }
    );

    const Tag = attrs.href ? 'a' : 'button';

    return (
        <Tag
            {...attrs}
            className={classes}
            disable={disabled}
            onClick={onClickAction}
        >{children}</Tag>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool
};

Button.defaultProps = {
    children: 'Default button',
    onClick: () => { },
    className: '',
    disabled: false,
    active: false
};

export default Button;