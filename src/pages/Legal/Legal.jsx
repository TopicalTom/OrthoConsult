import React from 'react';
import "./Legal.scss";

// Components
import Page from '../../components/DashboardPage/DashboardPage';
import Section from '../../components/DashboardSection/DashboardSection';
import Button from '../../components/Button/Button';

const Legal = () => {
    return (
        <Page className="legal" title="legal">
            <Section className="legal__section legal__section--overview">
                <h3>Overview</h3>
                <p>
                    By becoming a client of OrthoConsult you acknowledged the following documents. You can read each of the following below, or download them for your own records:
                </p>
                <Button 
                    className="legal__button isAction" 
                    type="action">
                    Download all files
                </Button>
            </Section>
            <Section className="legal__section legal__section--terms">
                <h3>Terms of Service</h3>
                <p>
                    In response to your request, the above is a hypothetical evaluation put to you solely for consideration by you as a health professional and not intended to be relied upon. 
                    The above remarks are suggested theoretical therapy options derived from the limited records provided by you and from no other source and do not constitute a diagnosis, recommended treatment or assessment for this or any other patient.
                    You have physically examined your patient and you are the certified and licensed dental practitioner and are solely responsible for the treatment and care of your patient.  
                    This hypothetical evaluation is merely an educational exercise to assist you in your overall practice development.  This evaluation is available only to customers of OrthoConsult Ltd. currently under the direct supervision of Dr. James Gordon Doner, DDS Registration #6577 maintaining compliance with the CDTO & RHPA, 1991 related to Laboratory Supervision Standards.
                </p>
                <Button 
                    className="legal__button isAction" 
                    type="action">
                    Download
                </Button>
            </Section>
            <Section className="legal__section legal__section--privacy">
                <h3>Privacy Policy</h3>
                <p>
                    In response to your request, the above is a hypothetical evaluation put to you solely for consideration by you as a health professional and not intended to be relied upon. 
                    The above remarks are suggested theoretical therapy options derived from the limited records provided by you and from no other source and do not constitute a diagnosis, recommended treatment or assessment for this or any other patient.
                    You have physically examined your patient and you are the certified and licensed dental practitioner and are solely responsible for the treatment and care of your patient.  
                    This hypothetical evaluation is merely an educational exercise to assist you in your overall practice development.  This evaluation is available only to customers of OrthoConsult Ltd. currently under the direct supervision of Dr. James Gordon Doner, DDS Registration #6577 maintaining compliance with the CDTO & RHPA, 1991 related to Laboratory Supervision Standards.
                </p>
                <Button 
                    className="legal__button isAction" 
                    type="action">
                    Download
                </Button>
            </Section>
        </Page>
    );
};

export default Legal;