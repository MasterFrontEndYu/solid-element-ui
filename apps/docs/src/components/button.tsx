import { Button } from "solid-element-ui";


const ButtonDemo = () => {
    return (
        <>
            <div class="display-flex">
                <Button variant="default">default</Button>
                <Button variant="outline">outline</Button>
                <Button variant="dashed">dashed</Button>
                <Button variant="filled">filled</Button>
                <Button variant="text">text</Button>
                <Button variant="link">link</Button>
            </div>
            <div class="display-flex">
                <Button color="primary">primary</Button>
                <Button variant="outline" color="primary">
                    primary
                </Button>
                <Button variant="dashed" color="primary">
                    primary
                </Button>
                <Button variant="filled" color="primary">
                    primary
                </Button>
                <Button variant="text" color="primary">
                    primary
                </Button>
                <Button variant="link" color="primary">
                    primary
                </Button>
            </div>
            <div class="display-flex">
                <Button color="success">success</Button>
                <Button variant="outline" color="success">
                    primary
                </Button>
                <Button variant="dashed" color="success">
                    primary
                </Button>
                <Button variant="filled" color="success">
                    primary
                </Button>
                <Button variant="text" color="success">
                    primary
                </Button>
                <Button variant="link" color="success">
                    primary
                </Button>
            </div>
            <div class="display-flex">
                <Button color="warning">warning</Button>
                <Button variant="outline" color="warning">
                    primary
                </Button>
                <Button variant="dashed" color="warning">
                    primary
                </Button>
                <Button variant="filled" color="warning">
                    primary
                </Button>
                <Button variant="text" color="warning">
                    primary
                </Button>
                <Button variant="link" color="warning">
                    primary
                </Button>
            </div>
            <div class="display-flex mb-24">
                <Button color="error">error</Button>
                <Button variant="outline" color="error">
                    primary
                </Button>
                <Button variant="dashed" color="error">
                    primary
                </Button>
                <Button variant="filled" color="error">
                    primary
                </Button>
                <Button variant="text" color="error">
                    primary
                </Button>
                <Button variant="link" color="error">
                    primary
                </Button>
            </div>
        </>
    );
};

export{ ButtonDemo };