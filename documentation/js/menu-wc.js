'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">providerdemo documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-d64ebfd8600e2206bb2c6f1ce36e0e046a1b887dcc6feed1280a36aa01c3aa29e6d7e4aab55442934268a44552a1963436e6e668951084ea84b7d3257c286b1c"' : 'data-target="#xs-components-links-module-AppModule-d64ebfd8600e2206bb2c6f1ce36e0e046a1b887dcc6feed1280a36aa01c3aa29e6d7e4aab55442934268a44552a1963436e6e668951084ea84b7d3257c286b1c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-d64ebfd8600e2206bb2c6f1ce36e0e046a1b887dcc6feed1280a36aa01c3aa29e6d7e4aab55442934268a44552a1963436e6e668951084ea84b7d3257c286b1c"' :
                                            'id="xs-components-links-module-AppModule-d64ebfd8600e2206bb2c6f1ce36e0e046a1b887dcc6feed1280a36aa01c3aa29e6d7e4aab55442934268a44552a1963436e6e668951084ea84b7d3257c286b1c"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DepartmentModule.html" data-type="entity-link" >DepartmentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DepartmentModule-4888577076c741e3dd2a1cbd3427c1e98926cf537e440cb124506812ac83a2def5fb1a4df3e4c35bc19737264ecacfcfbfcfdd502bf14908af2fb42fcb7b07f9"' : 'data-target="#xs-components-links-module-DepartmentModule-4888577076c741e3dd2a1cbd3427c1e98926cf537e440cb124506812ac83a2def5fb1a4df3e4c35bc19737264ecacfcfbfcfdd502bf14908af2fb42fcb7b07f9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DepartmentModule-4888577076c741e3dd2a1cbd3427c1e98926cf537e440cb124506812ac83a2def5fb1a4df3e4c35bc19737264ecacfcfbfcfdd502bf14908af2fb42fcb7b07f9"' :
                                            'id="xs-components-links-module-DepartmentModule-4888577076c741e3dd2a1cbd3427c1e98926cf537e440cb124506812ac83a2def5fb1a4df3e4c35bc19737264ecacfcfbfcfdd502bf14908af2fb42fcb7b07f9"' }>
                                            <li class="link">
                                                <a href="components/DepartmentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DepartmentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DepartmentRoutingModule.html" data-type="entity-link" >DepartmentRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EmployeeModule.html" data-type="entity-link" >EmployeeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EmployeeModule-5b13ceab6091ca33cf413e788fcb8c36228fd2296a44c3cc4e9d6989af42538798e719e5ead98dc80719c1f2d869ac3beb53b527b9ad3c49391631d31aa37941"' : 'data-target="#xs-components-links-module-EmployeeModule-5b13ceab6091ca33cf413e788fcb8c36228fd2296a44c3cc4e9d6989af42538798e719e5ead98dc80719c1f2d869ac3beb53b527b9ad3c49391631d31aa37941"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EmployeeModule-5b13ceab6091ca33cf413e788fcb8c36228fd2296a44c3cc4e9d6989af42538798e719e5ead98dc80719c1f2d869ac3beb53b527b9ad3c49391631d31aa37941"' :
                                            'id="xs-components-links-module-EmployeeModule-5b13ceab6091ca33cf413e788fcb8c36228fd2296a44c3cc4e9d6989af42538798e719e5ead98dc80719c1f2d869ac3beb53b527b9ad3c49391631d31aa37941"' }>
                                            <li class="link">
                                                <a href="components/EmployeeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmployeeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EmployeeRoutingModule.html" data-type="entity-link" >EmployeeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProductModule-e10993b754838a0cf987007a02dec83a2d6086b429612a699804f4efc4e1e0e916112e1ae965e0b8cfcbdaeeebea9b1bc9b61f6e38597dc9f57e1ca17b021662"' : 'data-target="#xs-components-links-module-ProductModule-e10993b754838a0cf987007a02dec83a2d6086b429612a699804f4efc4e1e0e916112e1ae965e0b8cfcbdaeeebea9b1bc9b61f6e38597dc9f57e1ca17b021662"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductModule-e10993b754838a0cf987007a02dec83a2d6086b429612a699804f4efc4e1e0e916112e1ae965e0b8cfcbdaeeebea9b1bc9b61f6e38597dc9f57e1ca17b021662"' :
                                            'id="xs-components-links-module-ProductModule-e10993b754838a0cf987007a02dec83a2d6086b429612a699804f4efc4e1e0e916112e1ae965e0b8cfcbdaeeebea9b1bc9b61f6e38597dc9f57e1ca17b021662"' }>
                                            <li class="link">
                                                <a href="components/ProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductRoutingModule.html" data-type="entity-link" >ProductRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ClassbasedService.html" data-type="entity-link" >ClassbasedService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConfigService.html" data-type="entity-link" >ConfigService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Config.html" data-type="entity-link" >Config</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});