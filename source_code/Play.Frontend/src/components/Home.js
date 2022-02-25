import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ApplicationPaths } from './Constants';

export class Home extends Component
{
  static displayName = Home.name;

  render()
  {
    return (
      <div>
        <h1>Play Economy</h1>
        <p>Welcome to the Play Economy website, a cloud native virtual economy system.</p>
        <p>To get started, yout can:</p>
        <ul>
          <li>Manage the <Link to={ApplicationPaths.CatalogPath}>Catalog</Link></li>
          <li>Check a user's <Link to={ApplicationPaths.InventoryPath}>Inventory</Link></li>
        </ul>
        <p>You can also</p>
        <ul>
          <li>Manage the <a href={window.RABBITMQ_URL} target="_blank" rel="noreferrer">message queues</a></li>
          <li>Explore the Open API documentation:
          <ul>
              <li><a href={`${window.CATALOG_SERVICE_URL}/swagger`} target="_blank" rel="noreferrer">Catalog service</a></li>
              <li><a href={`${window.INVENTORY_SERVICE_URL}/swagger`} target="_blank" rel="noreferrer">Inventory service</a></li>
            </ul>
          </li>
        </ul>
        <p>This website was built with:</p>
        <ul>
          <li><a href='https://get.asp.net'>ASP.NET Core</a> and <a href='https://docs.microsoft.com/en-us/dotnet/csharp'>C#</a> for cross-platform server-side code</li>
          <li><a href='https://www.docker.com'>Docker</a> for services containerization</li>
          <li><a href='https://www.mongodb.com'>MongoDB</a> for database storage</li>
          <li><a href='https://www.rabbitmq.com'>RabbitMQ</a> and <a href='https://masstransit-project.com'>MassTransit</a> for message-based asynchronous communication</li>
          <li><a href='https://facebook.github.io/react/'>React</a> for client-side rendering and <a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
        </ul>
      </div>
    );
  }
}
