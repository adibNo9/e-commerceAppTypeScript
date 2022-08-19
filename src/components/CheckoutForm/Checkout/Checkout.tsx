import { Paper, Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import AddressFrom from "../AddressFrom";
import PaymentForm from "../PaymentForm";
import { commerce } from "../../../lib/commerce";

import useStyles from "./styles";

const steps = ["Shipping Address", "Payment Method"];

const Checkout: React.FC<{ cart: { id: string } }> = ({ cart }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState<{ id: string }>({
    id: "",
  });
  const [shippingData, setShippingData] = useState({});
  const classes = useStyles();

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });

        setCheckoutToken(token);
      } catch (error) {}
    };

    generateToken();
  }, [cart.id]);

  const nextStep = () => setActiveStep((prevStep) => prevStep + 1);
  const backStep = () => setActiveStep((prevStep) => prevStep - 1);

  const next = (data: {}) => {
    setShippingData(data);
  };

  const Confirmation = () => <p>Confirmation</p>;

  const Form = () =>
    activeStep === 0 ? (
      <AddressFrom checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm shippingData={shippingData} />
    );

  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center" gutterBottom>
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
