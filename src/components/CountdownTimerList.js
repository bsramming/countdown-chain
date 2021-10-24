// Component for the list of counters.

import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function CountdownTimerList(props) {
    // TODO: load the saved counters. For now have a fixed list
    const countDownList = 
        <ListGroup variant="flush">
            <ListGroup.Item> <Button variant="primary">Countdown 1</Button> </ListGroup.Item>
            <ListGroup.Item> <Button variant="primary">Countdown 2</Button> </ListGroup.Item>
            <ListGroup.Item> <Button variant="primary">Countdown 3</Button> </ListGroup.Item>
            <ListGroup.Item> <Button variant="primary">Countdown 4</Button> </ListGroup.Item>
        </ListGroup>

    return (
        <div>
            <h1>Counters</h1>
            {countDownList}
        </div>
    );
}

export default CountdownTimerList;