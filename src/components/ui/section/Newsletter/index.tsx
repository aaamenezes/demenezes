import settings from '../../../../../settings.json';
import { clsx } from '../../../../utils/clsx';
import HiddenA11Y from '../../base/HiddenA11Y';
import Input from '../../base/Input';
import LinkButton from '../../base/LinkButton';
import Wrapper from '../../container/Wrapper';
import S from './styles.module.css';

export default function Newsletter() {
  const { title, mailchimpFormAction } = settings.form.signup;

  return (
    <Wrapper className={S.newsletterForm} width="full" isFluid>
      <Wrapper width="md" spacing={0}>
        <h3 className={S.newsletterTitle}>{title}</h3>

        {/* Begin Mailchimp Signup Form */}
        <div id="mc_embed_signup">
          <form
            action={mailchimpFormAction}
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
          >
            <div id="mc_embed_signup_scroll">
              <div className={S.inputsWrapper}>
                <div className="mc-field-group">
                  <HiddenA11Y>
                    <label htmlFor="mce-FNAME">Informe seu nome</label>
                  </HiddenA11Y>
                  <Input
                    type="text"
                    name="FNAME"
                    className=""
                    id="mce-FNAME"
                    placeholder="Nome"
                    required
                  />
                </div>
                <div className="mc-field-group">
                  <HiddenA11Y>
                    <label htmlFor="mce-EMAIL">
                      Informe seu endereço de email
                    </label>
                  </HiddenA11Y>
                  <Input
                    type="email"
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div id="mce-responses" className="clear foot">
                <div
                  className="response"
                  id="mce-error-response"
                  style={{ display: 'none' }}
                />
                <div
                  className="response"
                  id="mce-success-response"
                  style={{ display: 'none' }}
                />
              </div>
              <HiddenA11Y aria-hidden="true">
                <input
                  type="text"
                  name="b_931f7d0fb92503537ca06456d_4b0ff01e85"
                  tabIndex={-1}
                  value=""
                  onChange={() => {}}
                />
              </HiddenA11Y>
              <div className="optionalParent">
                <div className="clear foot">
                  <LinkButton
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className={clsx(S.submitButton, 'button')}
                  >
                    Quero receber
                  </LinkButton>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* End mc_embed_signup */}
      </Wrapper>
    </Wrapper>
  );
}
