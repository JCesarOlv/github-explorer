import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';


interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header >
        <img src={logoImg} alt="Github Explorer"/>
        <Link to='/'>
          <FiChevronLeft  size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="https://avatars.githubusercontent.com/u/28929274?v=4" alt="Rocketseat"/>
          <div>
            <strong>rocketseat/unform</strong>
            <p>descriçao do repositorio</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1888</strong>
            <span>stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>issues</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to=''>
          <div>
            <strong></strong>
            <p></p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  )
}

export default Repository;
