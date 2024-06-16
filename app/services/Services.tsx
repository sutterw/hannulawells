import React, { use } from "react";

type Props = {};

const Services = (props: Props) => {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-white">
                            <h2>Services we offer</h2>
                            <p className="lead">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.
                            </p>
                            <ul>
                                <li>Service 1</li>
                                <li>Service 2</li>
                                <li>Service 3</li>
                                <li>Service 4</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
