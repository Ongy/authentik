import { AdminInterface } from "@goauthentik/admin/AdminInterface";
import { AKElement, rootInterface } from "@goauthentik/elements/Base";

import { CSSResult, TemplateResult, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";

import PFAvatar from "@patternfly/patternfly/components/Avatar/avatar.css";
import PFNav from "@patternfly/patternfly/components/Nav/nav.css";
import PFBase from "@patternfly/patternfly/patternfly-base.css";

@customElement("ak-sidebar-user")
export class SidebarUser extends AKElement {
    static get styles(): CSSResult[] {
        return [
            PFBase,
            PFNav,
            PFAvatar,
            css`
                :host {
                    display: flex;
                    width: 100%;
                    flex-direction: row;
                    justify-content: space-between;
                }
                .pf-c-nav__link {
                    align-items: center;
                    display: flex;
                    justify-content: center;
                }
            `,
        ];
    }

    render(): TemplateResult {
        const me = rootInterface<AdminInterface>()?.user;
        return html`
            <a href="/if/user/#/settings" class="pf-c-nav__link user-avatar" id="user-settings">
                ${me
                    ? html`<img class="pf-c-avatar" src="${ifDefined(me.user.avatar)}" alt="" />`
                    : html``}
            </a>
            <a href="/flows/-/default/invalidation/" class="pf-c-nav__link user-logout" id="logout">
                <i class="fas fa-sign-out-alt" aria-hidden="true"></i>
            </a>
        `;
    }
}
