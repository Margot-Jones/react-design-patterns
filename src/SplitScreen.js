const SplitScreen = ({ children, leftWeight, rightWeight }) => {
    const [left, right] = children;
    return (
        <div style={{display: 'flex'}}>
            <div style={{flex: `${leftWeight}`}}>
                {left}
            </div>
            <div style={{flex: `${rightWeight}`}}>
                {right}
            </div>
        </div>
    );
}

export default SplitScreen;