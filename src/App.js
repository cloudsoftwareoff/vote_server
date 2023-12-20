import React , {useEffect} from 'react';
import { BrowserRouter, Route, Routes, useNavigate, Navigate  } from 'react-router-dom';
import { useUser } from './user';
import CinCard from './ui/cin';
import VotingHomePage from './ui/voting';



const NotFound = () => (
  <div>
    <h1>404 - Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </div>
);

const App = () => {
  const { user } = useUser();
  

  // If the user is not logged in, navigate to the /auth route
  useEffect(() => {
    if (!user) {
      // You can use the Navigate component to redirect
     // return <Navigate to="/auth" />;
    }
  }, [user]);
  
  return (
    
    <BrowserRouter>
   <Navigate to="/auth" when={!user} />
      <Routes>
        <Route path="/" element={<VotingHomePage />} /> {/* Use element prop and wrap Home with JSX */}
        <Route path="/auth" element={< CinCard />} />
        <Route component={NotFound} />
      </Routes>
    </BrowserRouter>
   
  );
};



export default App;
