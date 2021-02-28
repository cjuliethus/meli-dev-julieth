import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import DetailItem from "../components/DetailItem/DetailItem";
import ListResults from "../components/ListResults/ListResults";
import MainContainer from "../components/MainContainer/MainContainer";
import { Layout } from "../stylesApp/style";


/**
 * 
 * File of routes from project with react-router
 * 
 * docs: https://reactrouter.com/web/guides/quick-start
 * 
 */
const Routes = () => {

    return (
        <Suspense fallback={<div />}>
            <Layout>
                <Switch>
                    <Route exact path="/" component={MainContainer} />
                    <Route exact path="/items" >
                        <MainContainer>
                            <ListResults />
                        </MainContainer>
                    </Route>
                    <Route exact path="/items/:itemId" >
                        <MainContainer>
                            <DetailItem />
                        </MainContainer>
                    </Route>
                </Switch>
            </Layout>
        </Suspense>
    );
};


export default Routes;
