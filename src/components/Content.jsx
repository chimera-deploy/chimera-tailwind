import React from 'react'
import caseStudy from '../assets/caseStudy.json'
import { useEffect } from 'react'
import TeamMembers from '../components/Team'

import monololithArchitecture from '../images/diagrams/Monolith.png'
import microserviceArchitecture from '../images/diagrams/Microservice.png'
import containerOrchestrator from '../images/diagrams/Container-Orchestrator.png'
import serviceMesh from '../images/diagrams/Service-Mesh.png'
import cicdPipeline from '../images/diagrams/cicd.png'
import allAtOnceDeployment from '../images/diagrams/All-At-Once-Deployment.gif'
import rollingDeployment from '../images/diagrams/Rolling-Deployment.gif'
import blueGreenDeployment from '../images/diagrams/Blue-Green-Deployment.gif'
import canaryDeployment from '../images/diagrams/Canary-Deployment.gif'
import existingSolutions from '../images/diagrams/Existing-Solutions.png'
import routingOrchestrationOverview from '../images/diagrams/Routing-Orchestration-Overview.png'
import canaryECSService from '../images/diagrams/Canary-ECS-Service.png'
import routingOrchestrationMetricsOverview from '../images/diagrams/Routing-Orchestration-Metrics-Overview.png'
import appMeshDetail from '../images/diagrams/App-Mesh-Detail.png'
import canaryNodeECS from '../images/diagrams/Canary-Node-ECS-Service.png'
import routingOrchestrationMetricsHighlightedOverview from '../images/diagrams/Routing-Orchestration-Metrics-Highlighted-Overview.png'
import fullChimera from '../images/diagrams/Canary-Full-Diagram.png'
import rollback from '../images/diagrams/Canary-Rollback.png'
import cleanup from '../images/diagrams/Canary-Cleanup.png'
import baseInfrastructure from '../images/screenshots/base-infrastructure.png'
import prepareECSCluster from '../images/screenshots/prepare-ECS-cluster.png'
import configureNewService from '../images/screenshots/configure-new-service.png'
import beginDeployment from '../images/screenshots/begin-deployment.gif'
import manyCloudWatchAgents from '../images/diagrams/Many-Cloud-Watch-Agents.png'
import oneCloudWatchAgent from '../images/diagrams/One-Cloud-Watch-Agent.png'
import baseline from '../images/diagrams/Baseline.png'
import noBaseline from '../images/diagrams/No-Baseline.png'
import CICDPipeline from '../images/diagrams/CICD-Pipeline.png'
import webhook from '../images/diagrams/Webhook.png'




const addSidebarHighlight = (id) => {
  const stringId = id.replaceAll(' ', '%20')
  const sidebarLink = document.querySelector(`ul li a[href="#${stringId}"]`)
  if (sidebarLink) {
    // sidebarLink.classList.add('text-2xl', 'text-bold', 'text-greensheen')
    sidebarLink.classList.add('text-bold', 'text-greensheen')
  }  
}

const removeSidebarHightlight = (id) => {
  const stringId = id.replaceAll(' ', '%20')
  const sidebarLink = document.querySelector(`ul li a[href="#${stringId}"]`)
  if (sidebarLink) {
    // sidebarLink.classList.remove('text-2xl', 'text-bold', 'text-greensheen')
    sidebarLink.classList.remove('text-bold', 'text-greensheen')
  }
}

// const Figure = (figureData) => {
//   const figureFormat = 'flex justify-center max-h-96'
//   const captionFormat = 'italic text-center'
//   const imageFormat = 'object-contain max-h-96'

//   return (
//     <figure className={figureFormat}>
//       <div>
//         <img className={imageFormat} src={figureData.pic} alt={figureData.alt}></img>
//         <figcaption className={captionFormat}>{figureData.caption}</figcaption>
//       </div>
//     </figure>
//   )
// }

const Content = () => {
  useEffect(()=> {
    const callback = (entries) => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id')
        if (entry.intersectionRatio > 0) {
          addSidebarHighlight(id)
        } else {
          removeSidebarHightlight(id)
        }
      })
    }

    const observer = new IntersectionObserver(callback)
    const sections = document.querySelectorAll("div[id]") 
    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  // const sectionHeaders = Object.keys(caseStudy)

  const sectionDiv = 'md:mr-64 md:ml-80 mx-12'
  const mainHeader = 'font-koulen text-tyrianpurple text-4xl text-left mt-24 mb-2'
  const subHeader = 'font-koulen text-tyrianpurple text-2xl text-left mt-6 mb-2'
  const textDiv = 'font-sans text-lg space-y-3'
  const imageCaption = 'italic text-center mb-8'
  const figureFormat = 'flex justify-center'
  const imageFormat = 'object-contain max-h-128 mt-8'
  const bodyLink = 'text-greensheen'
  const unorderedList = 'list-disc pl-8'
  const orderedList ='list-decimal pl-8'

  return (
    <>
      <div id="introduction" className="flex flex-col bg-flame h-full py-24 space-y-12">
        <h3 className="mx-12 font-koulen text-white text-4xl text-center px-12">Chimera is an open-source tool for performing automated <span className="text-black"><b>canary deployments</b></span> of <span className="text-black"><b>containerized microservices</b></span>. It allows software development teams to safely and easily deploy new versions of their microservices by taking advantage of the features provided by their existing service mesh.</h3>
      </div>
      {/* <div id="introduction" className={sectionDiv}>
        <h2 className={mainHeader}>Introduction</h2>
        <div className={textDiv}>
          <p>Chimera is an open-source tool for performing automated <b>canary deployments</b> of <b>containerized microservices</b>. It allows software development teams to safely and easily deploy new versions of their microservices by taking advantage of the features provided by their existing service mesh.</p>
        </div>
      </div> */}
      <div id="containerizedMicroservices" className={sectionDiv}>
        <h2 className={mainHeader}>Containerized Microservices</h2>
        <div className={textDiv}>
          <p>Traditionally, software systems were designed using a monolithic architecture. In this architecture, each piece of the system is a part of one large code base which is deployed as a single program. </p>
          <figure className={figureFormat}>
            <div>
              <img className={imageFormat} src={monololithArchitecture} alt="monolith architecture"></img>
              <figcaption className={imageCaption}>Monolithic Architecture</figcaption>
            </div>
          </figure>
          <p>Modern software systems often use a <b>microservice</b> architecture, in which individual parts of a system have been split up into independent applications and are referred to as <b>services</b>. Unlike a monolithic architecture, the individual services in a microservice architecture are loosely coupled and can be independently tested, deployed, and scaled. Microservices can use different technology stacks and can be maintained by smaller, autonomous teams.</p>
          <figure className={figureFormat}>
            <div>
              <img className={imageFormat} src={microserviceArchitecture} alt="microservice architecture"></img>
              <figcaption className={imageCaption}>Microservice Architecture</figcaption>
            </div>
          </figure>
          <p>A microservice architecture comes with its own unique set of challenges. For example, each microservice should be able to scale independently. Each microservice may consist of multiple instances of the same application which can be added or removed in response to fluctuating traffic demands. This scaling introduces other concerns, such as load balancing and the provisioning of new resources.</p>
          <p>A common solution to these challenges is known as <b>container orchestration</b>. Applications can be packaged as container images using a tool like Docker, and a container orchestration tool can handle, among other features, provisioning resources to run the application, scaling as needed, and performing load balancing to ensure that no single instance of the application is overwhelmed. There are many container orchestration tools such as <em>Kubernetes</em>, <em>Docker Swarm</em>, and <em>AWS Elastic Container Service</em>.</p>
          <figure className={figureFormat}>
            <div>
              <img className={imageFormat} src={containerOrchestrator} alt="container orchestration"></img>
              <figcaption className={imageCaption}>Container Orchestration</figcaption>
            </div>
          </figure>
          <p>In a monolithic architecture, individual components of a system communicate via method or function calls. Microservices, on the other hand, must communicate via networking protocols such as HTTP or AMQP. As a microservice architecture grows, it can include many services and the communications between them can become very complex. Each service must have the logic that controls these communications built into it, including how it can interact with the other services and what should happen if another service fails to respond. As a system grows and changes, each service must independently keep up with how this communication logic changes.</p>
          <p>One possible solution to this problem is to include an additional layer to the infrastructure known as a <b>service mesh</b>. When using a service mesh, each microservice is associated with a <em>sidecar proxy</em> which intercepts requests to and from the service. These proxies are referred to as the <em>data plane</em> of the service mesh and handle the complexities of inter-service communication. The developer can control and configure these proxies via the <em>control plane</em> of the service mesh. Common examples of service mesh products include <em>Istio</em>, <em>Linkerd</em>, and <em>AWS App Mesh</em>.</p>
          <figure className={figureFormat}>
            <div>
              <img className={imageFormat} src={serviceMesh} alt="service mesh"></img>
              <figcaption className={imageCaption}>Service Mesh</figcaption>
            </div>
          </figure>
          <p>Because all interaction between services flows through the data-plane of the service mesh, it can capture traces and data about the inter-service communication. This improves observability into how the system is performing. Additionally, service meshes provide an abstraction known as a <em>virtual service</em>, which provides the ability to configure how requests are routed to a service within the mesh.</p>
          <figure className={figureFormat}>
            <div>
              <img className={imageFormat} src={serviceMesh} alt="percentage based traffic routing between services"></img>
              <figcaption className={imageCaption}>Percentage Based Traffic Routing Between Services</figcaption>
            </div>
          </figure>
        </div>
      </div>
      <div id="deployingMicroservices" className={sectionDiv}>
        <h2 className={mainHeader}>Deploying Microservices</h2>
        <div className={textDiv}>
          <p>Designing and writing code is only a part of the process of creating a new version of an application and providing new or improved features for your users. A very important part of the process is delivering the new version and making it available. This is why a robust Continuous Integration and Continuous Delivery (CI/CD) pipeline is essential. When a CI/CD pipeline is performing correctly, teams can iterate incrementally and rapidly. Modern software teams commonly deploy new versions of their code several times a day. In order to achieve this, the steps of the deployment process must be automated, reliable, and have minimal impact on the application’s users.</p>
          <p>A typical CI/CD pipeline will include automated steps for building and testing new code as it is pushed into a code repository. This process ensures that at any given point, all code in a repository has been tested and meets whatever standards have been established. Once this has been done, the goal is to make the new version available to users as soon as possible. This kind of fast iteration allows teams to “fail fast”, which in turn allows the team to identify any problems as soon as possible. This goal needs to be balanced with the goal of providing the best possible customer experience and careful thought needs to be put into how the deployment process can achieve both goals.</p>
          <figure className={figureFormat}>
            <div>
              <img className={imageFormat} src={cicdPipeline} alt="Chimera's place in a CI/CD pipeline"></img>
              <figcaption className={imageCaption}>Chimera's Place in a CI/CD Pipeline</figcaption>
            </div>
          </figure>
        </div>
        <h3 className={subHeader}>Traditional Deployments</h3>
        <div className={textDiv}>
          <p>The traditional and most simple deployment strategy is known as an <em>“All-at-Once”</em> deployment. Using this strategy, the application is simply taken offline at a designated time. While it is offline, it is replaced with the new version of the application. Once the process is completed, the new version is made available to users. While it is relatively simple, there are several problems with this strategy. While the software is being updated, it is inaccessible to users. Availability is a major concern for modern software systems as it has a very direct and clear impact on both revenue and the user experience. For that reason, this process can not be performed frequently and the team will not be able to rapidly iterate and release new features.</p>
          <figure className={figureFormat}>
            <div>
              <img className={imageFormat} src={allAtOnceDeployment} alt="All-at-once Deployment"></img>
              <figcaption className={imageCaption}>All-at-once Deployment</figcaption>
            </div>
          </figure>
          <p>Another significant problem with this approach is that flaws in the new software could potentially impact every user. Further, if a flaw is identified, rolling back to a previous version requires another deployment and more, potentially unplanned, downtime.</p>
        </div>
        <h3 className={subHeader}>Rolling Deployments</h3>
        <div className={textDiv}>
          <p>When using a microservice architecture, it is common to have multiple instances of an application running concurrently to scale as traffic increases or decreases. When this is the case, it is possible to use a <em>rolling</em> deployment strategy. Using this strategy, individual instances of the application can be taken down and replaced with the new version one by one. This keeps the application available to users during the deployment, and it also helps to reduce the number of users that may be affected by bugs in the new code.</p>
          <figure className={figureFormat}>
            <div>
              <img className={imageFormat} src={rollingDeployment} alt="Rolling Deployment"></img>
              <figcaption className={imageCaption}>Rolling Deployment</figcaption>
            </div>
          </figure>
          <p>Unfortunately, if an issue is found and a rollback must occur, all of the new instances must be stopped and any of the old instances that have already been taken down must be restarted. This means your service will be operating at limited capacity until all of the old instances are back up, which may create availability issues, especially if the error is identified late in the deployment process. This strategy is also not possible unless the service consists of multiple instances, which is not always the case.</p>
        </div>
        <h3 className={subHeader}>Blue-Green Deployments</h3>
        <div className={textDiv}>
          <p>An alternative to all-at-once and rolling deployments is known as a <em>blue-green</em> deployment. Using this strategy, the new version of the software (the green environment) is deployed while the stable version (the blue environment) is still running. Once the new version is running, 100% of traffic is routed to it. The benefit of this strategy is that it removes downtime. Users can still access the stable deployment while the new version is starting. Then, if any issues arise 100% of traffic can be shifted back to the stable version. Once the team is confident the new service is working as expected, the new version becomes the stable environment and the old version can be brought down.</p>
          <figure className={figureFormat}>
            <div>
              <img className={imageFormat} src={blueGreenDeployment} alt="Blue-Green Deployment"></img>
              <figcaption className={imageCaption}>Blue-Green Deployment</figcaption>
            </div>
          </figure>
          <p>Blue-green deployments solve the problem of reducing downtime, but errors in the new software can still affect every user of the application.</p>
        </div>
        <h3 className={subHeader}>Canary Deployments</h3>
        <div className={textDiv}>
          <p>Canary deployments are similar to blue-green deployments in that a new version, which we refer to as the <em>canary</em>, is deployed while the stable version is still running. The difference is that traffic is not shifted all at once, but is instead shifted incrementally over a predetermined time frame, referred to as an <em>interval</em>. In order to achieve this, some tool capable of performing load balancing must be placed in front of the stable version and the canary.</p>
          <p>As traffic is slowly shifted to the canary, performance metrics can be analyzed that will inform the decision of whether more traffic should be shifted or if a rollback to the stable version should occur. Once 100% of the traffic is shifted to the canary, the stable version can be removed and replaced with the new version of the code. On the other hand, if it is determined that the canary is not stable enough to be used in production, traffic can be shifted back to the stable version and the canary will be removed.</p>
          <figure className={figureFormat}>
            <div>
              <img className={imageFormat} src={canaryDeployment} alt="Canary Deployment"></img>
              <figcaption className={imageCaption}>Canary Deployment</figcaption>
            </div>
          </figure>
          <p>Using canary deployments, there is no downtime and the application remains available to users throughout the process. It also serves to minimize the amount of users that may be negatively impacted by errors in the new version of the code. </p>
          <p>These features come at the cost of increased complexity, as canary deployments require many more moving parts than other deployment strategies. Most of the added complexity requires real-time manual intervention, such as determining whether more traffic can be shifted. Canary deployments also require an extended length of time compared to other strategies, sometimes spreading the traffic shifting over several hours. </p>
        </div>
      </div>
      <div id="existingSolutions" className={sectionDiv}>
        <h2 className={mainHeader}>Existing Solutions</h2>
        <div className={textDiv}>
          <p>Because canary deployments are complex and require an extended timeframe to complete, the process can greatly benefit from automation. This is especially true if the canary deployment is part of a CI/CD process that is intended to deploy as frequently as possible. There are several distinct categories of existing solutions for automating canary deployments of containerized microservices.</p>
        </div>
        <h3 className={subHeader}>Kubernetes Centric Solutions</h3>
        <div className={textDiv}>
          <p>Kubernetes is a very popular, open-source container orchestration tool. It’s no surprise that many automated canary deployment tools work exclusively in the Kubernetes ecosystem. Even though these tools are limited to a Kubernetes-type container management system, they are typically quite flexible regarding the traffic routing tools and monitoring tools with which they integrate. </p>
          <p>Kubernetes-centric canary deployment tools such as Flagger are open-source, which means you can usually tell how they work or, in other words, why they would or would not promote the canary service  during the canary analysis stage of deployment. Moreover, as long as you already work within the Kubernetes ecosystem, these tools are easy to set up and use. However, if you're using a container management system like AWS's Elastic Container Service or Docker Swarm, then these tools are not available to you.</p>
        </div>
        <h3 className={subHeader}>Ultra-Flexible Open-Source Solutions</h3>
        <div className={textDiv}>
          <p>There are many possible combinations of container orchestration, traffic routing, and monitoring tools available. Some solutions strive to be flexible enough to support any of these potential combinations. For example, Spinnaker is an open-source project that can support deployments for a very wide variety of systems. Spinnaker can achieve this because it consists of a large collection of configurable microservices.</p>
          <p>The high level of configurability and flexibility of these tools makes them much more complicated. In addition to managing the microservice architecture of your own project, you also have to configure and manage all the various components of Spinnaker.</p>
        </div>
        <h3 className={subHeader}>CD-AS-A-Service</h3>
        <div className={textDiv}>
          <p>Some products, such as Harness, provide continuous delivery and deployment as a service. These tools offer a streamlined service that abstracts away most of the setup and configuration of deployments. They are comparatively simple to use, but they are often very feature rich. Because of this, competent usage requires a baseline level of devops expertise and experience.</p>
          <p>CD-as-a-Service platforms are typically not open source. Compared to open-source solutions, it may be less clear how they work or why they would continue rolling the canary forward or roll it back. This is because their internal infrastructure is inaccessible to the user, and they sometimes use unsupervised machine learning tools that lack transparency by design.</p>
        </div>
      </div>
      <div id="introducingChimera" className={sectionDiv}>
        <h2 className={mainHeader}>Introducing Chimera</h2>
        <div className={textDiv}>
          <p>In the landscape of existing automated canary deployment tools, what is missing is an easy-to-use, open source tool for those outside of the Kubernetes ecosystem.</p>
          <figure className={figureFormat}>
            <div>
              <img className={imageFormat} src={existingSolutions} alt="Existing Solutions"></img>
              <figcaption className={imageCaption}>Existing Solutions</figcaption>
            </div>
          </figure>
          <p>Chimera is a containerized web application that can be deployed either locally or on the cloud, and provides a simple interface for configuring and initiating a canary deployment. It is open-source, and handles each step of the canary deployment process automatically.</p>
          <p>Chimera achieves this by trading off flexibility for ease-of-use. While it can be used by those outside of the Kubernetes ecosystem, there are limits to the infrastructure that Chimera can support. Currently, Chimera can support automated canary deployments for microservices orchestrated by AWS Elastic Container Service using AWS App Mesh to facilitate interservice communication.</p>
        </div>
      </div>
      <div id="chimerasArchitecture" className={sectionDiv}>
        <h2 className={mainHeader}>Chimera's Architecture</h2>
        <div className={textDiv}>
          <p>To begin the exploration into how Chimera delivers on these design goals and performs canary deployments, we must consider the various infrastructure components that make the canary deployment possible.</p>
        </div>
        <h3 className={subHeader}>Container Orchestration</h3>
        <div className={textDiv}>
          <p>First, we have to consider where the application is running. As mentioned previously, a common solution for deploying microservices is to deploy containerized applications using a container orchestration tool. This orchestration tool handles provisioning, maintaining and scaling the compute resources that the application requires.</p>
          <figure className={figureFormat}>
            <div>
              <img className={imageFormat} src={routingOrchestrationOverview} alt="Routing and Orchestration"></img>
              <figcaption className={imageCaption}>Routing and Orchestration</figcaption>
            </div>
          </figure>
          <p>Chimera currently supports canary deployments for containerized microservices that are managed by AWS Elastic Container Service (ECS). ECS runs instances of containerized applications as <em>tasks</em>, which are configured via <em>task definitions</em>. A single ECS <em>service</em> can consist of several duplicated instances of the same task. A collection of services is called a <em>cluster</em>.</p>
          <p>ECS tasks can be configured to use one of two <em>launch types</em>: <em>Elastic Cloud Compute (EC2)</em> or <em>Fargate</em>. The EC2 launch type allows you to configure and deploy EC2 instances on the ECS cluster, and you are responsible for managing those resources. Fargate, on the other hand, is an AWS service that manages the compute resources upon which your tasks run so that you do not have to. Currently, Chimera only supports ECS for container management using the Fargate launch type.</p>
          <p>When Chimera begins a canary deployment, it creates a new task definition and deploys a new service onto the user’s ECS cluster. Once this canary service is created and running, the next step is to begin routing traffic to it.</p>
          <figure className={figureFormat}>
            <div>
              <img className={imageFormat} src={canaryECSService} alt="Chimera Deploying Canary ECS Service"></img>
              <figcaption className={imageCaption}>Deploying New ECS Service</figcaption>
            </div>
          </figure>
        </div>
        <h3 className={subHeader}>Traffic Routing</h3>
        <div className={textDiv}>
          <p><a className={bodyLink} href="/implementCatherinesLinkSuggestionHere" >We mentioned previously</a> that an important part of a canary deployment is the controlled, incremental shifting of traffic from the stable deployment to the canary. In order to achieve this, some tool that is capable of routing traffic based on user-defined rules must be placed in front of the two distinct versions of the microservice that is being updated.</p>
          <figure className={figureFormat}>
            <div>
              <img className={imageFormat} src={routingOrchestrationMetricsOverview} alt="Traffic Routing"></img>
              <figcaption className={imageCaption}>Traffic Routing</figcaption>
            </div>
          </figure>
          <p><a className={bodyLink} href="/implementCatherinesLinkSuggestionHere">We also mentioned the service mesh</a> which handles the complex logic of communication between microservices. This is the tool that Chimera uses for traffic shifting during a canary deployment. Chimera currently supports deployments on infrastructure that uses App Mesh, a service mesh product provided by AWS. Like other service meshes, App Mesh consists of “virtual” components that abstract away the fine-grained details of inter-service networking, load balancing, and service discovery.</p>
          <p>Chimera takes advantage of these abstractions when it is shifting traffic. Virtual nodes, for example, are best thought of as pointers to ECS tasks. App Mesh uses the configurations of virtual nodes to configure an Envoy sidecar proxy on ECS tasks. These sidecar proxies intercept all traffic to and from the application container and apply the appropriate network communication rules. </p>
          <p>Another abstraction of service meshes, and App Mesh, in particular, is a virtual router. App Mesh uses a virtual router’s configuration to split traffic through weights. In this way, it is like an abstraction over a traditional load balancer.</p>
          <figure className={figureFormat}>
            <div>
              <img className={imageFormat} src={appMeshDetail} alt="App Mesh Components"></img>
              <figcaption className={imageCaption}>App Mesh Components</figcaption>
            </div>
          </figure>
          <p>Because virtual nodes correspond to ECS tasks, Chimera also automatically deploys a canary virtual node and a containerized envoy proxy during the first stage of the canary deployment. This is necessary for Chimera’s control over traffic routing to propagate down to the actual containerized services. </p>
          <figure className={figureFormat}>
            <div>
              <img className={imageFormat} src={canaryNodeECS} alt="Deploying Canary ECS Service and Virtual Node"></img>
              <figcaption className={imageCaption}>Deploying Canary ECS Service and Virtual Node</figcaption>
            </div>
          </figure>
          <p>During the traffic routing stages of a canary deployment, Chimera configures App Mesh's control plane to modify the weights that the virtual router uses to shift the traffic from the stable service to the canary. To determine whether or not traffic should be shifted further, or if traffic should be diverted back to the stable service, Chimera needs a monitoring component to perform health checks.</p>
        </div>
        <h3 className={subHeader}>Monitoring</h3>
        <div className={textDiv}>
          <p>As a canary deployment proceeds, the performance of the canary service must be evaluated to determine whether the deployment can proceed. The envoy proxies that make up the data plane of App Mesh emit various metrics related to inter-service communication. To perform health checks while deploying new code, Chimera needs to gather, store, and analyze those metrics.</p>
          <figure className={figureFormat}>
            <div>
              <img className={imageFormat} src={routingOrchestrationMetricsHighlightedOverview} alt="Routing Orchestration and Monitoring"></img>
              <figcaption className={imageCaption}>Routing Orchestration and Monitoring</figcaption>
            </div>
          </figure>
          <p>To gather metrics, Chimera takes advantage of a containerized application provided by AWS called the CloudWatch Agent. This application can be deployed onto an ECS cluster, where it will scrape metrics at regular intervals from the envoy proxies attached to the services on that cluster. The gathered data will then be exported to the CloudWatch platform so that Chimera can retrieve it when performing health checks.</p>
          <figure className={figureFormat}>
            <div>
              <img className={imageFormat} src={fullChimera} alt="The Many Parts of Chimera"></img>
              <figcaption className={imageCaption}>The Many Parts of Chimera</figcaption>
            </div>
          </figure>
          <p>Every minute, Chimera compares the metrics generated by the canary against a user-defined threshold. At the end of an interval, if the metrics are satisfactory the next interval begins, and a greater percentage of traffic is directed to the canary. This continues until 100% of the traffic is directed to the canary for an entire interval. If at the end of this final interval, the metrics are still satisfactory, the deployment is a success and cleanup begins. If the metrics are unsatisfactory at any time, Chimera recognizes the deployment as a failure.</p>
          <p>When Chimera detects a failed deployment, it instantly begins rolling back to the original service and infrastructure. All traffic currently directed to the canary is immediately shifted to the original service. The virtual node, task instances and definitions of the canary are torn down and removed.</p>
          <figure className={figureFormat}>
            <div>
              <img className={imageFormat} src={rollback} alt="Rolling Back a Failed Deployment"></img>
              <figcaption className={imageCaption}>Rolling Back a Failed Deployment</figcaption>
            </div>
          </figure>
          <p> When deployment succeeds, Chimera begins cleaning up the old stable service in a process similar to the rollback of a failed deployment. It tears down and removes the virtual node, task instances and definitions of the original service.</p>
          <figure className={figureFormat}>
            <div>
              <img className={imageFormat} src={cleanup} alt="Cleaning Up After a Successfull Deployment"></img>
              <figcaption className={imageCaption}>Cleaning Up After a Successfull Deployment</figcaption>
            </div>
          </figure>
        </div>
      </div>
      <div id="usingChimera" className={sectionDiv}>
        <h2 className={mainHeader}>Using Chimera</h2>
        <div className={textDiv}>
          <p><a className={bodyLink} href="/README">INCLUDE LINK TO README</a></p>
          <p>Chimera is made available as a containerized web application with a React front end user interface, and an express app backend that handles managing AWS resources. To begin using Chimera, the user just needs to provide AWS credential information in a configuration file and use docker-compose to start the application, where they will be asked for some basic information about their infrastructure.</p>
          <figure className={figureFormat}>
            <img className={imageFormat} src={baseInfrastructure} alt="Base Infrastructure"></img>
            <figcaption className={imageCaption}></figcaption>
          </figure>
          <p>Before a deployment can actually begin, the user’s ECS cluster must be prepared via a one-time setup process. This process will deploy a single ECS service running the Prometheus-configured CloudWatch Agent which is responsible for scraping metrics from the Envoy proxies on the cluster.</p>
          <figure className={figureFormat}>
            <img className={imageFormat} src={prepareECSCluster} alt="Prepare ECS Cluster"></img>
            <figcaption className={imageCaption}></figcaption>
          </figure>
          <p>Once this setup process is complete, the user can select a service to update. The user will be asked for some more configuration information, such as the location of a container image.</p>
          <figure className={figureFormat}>
            <img className={imageFormat} src={configureNewService} alt="Configuring New Service and Selecting Deployment Options"></img>
            <figcaption className={imageCaption}></figcaption>
          </figure>
          <p>Once the user begins the deployment, Chimera will create the necessary infrastructure and wait for the new service to be discoverable. When this happens, traffic will begin shifting to the canary. The front end will display status updates to the user as this proceeds.</p>
          <figure className={figureFormat}>
            <img className={imageFormat} src={beginDeployment} alt="Beginning Deployment"></img>
            <figcaption className={imageCaption}></figcaption>
          </figure>
          <p>Once every minute, Chimera will query CloudWatch for performance metrics and perform the threshold analysis needed to determine the health of the canary. If this health check fails, the service will immediately roll back to the previous stable version. Otherwise, it will continue until 100% of traffic is shifted to the canary, at which point the deployment will be complete and old infrastructure for the previous version will be removed.</p>
        </div>
      </div>
      <div id="technicalChallenges" className={sectionDiv}>
        <h2 className={mainHeader}>Techinical Challenges and Design Decisions</h2>
        <h3 className={subHeader}>Design Goals</h3>
        <div className={textDiv}>
          <p>While designing Chimera, we had to make many design decisions that would impact the final product. While making these decisions, we kept a small set of design goals in mind.</p>
          <ul className={unorderedList} role="list">
            <li>Minimize the amount of configuration that Chimera requires from the user. The process of initiating a deployment should be fast and simple.</li>
            <li>Ensure that Chimera is transparent and provides clear and understandable results whether a deployment succeeds or fails.</li>
            <li>Ensure that Chimera has a minimal impact on the user’s existing infrastructure. AWS resource configuration can be very complex and Chimera should not modify the existing configuration unless it is absolutely necessary.</li>
            <li>Ensure that Chimera reuses existing configuration wherever possible. Chimera should obtain the information it needs without requiring input from the user if it can.</li>
          </ul>
          <p>Chimera uses the SDK to interact with AWS. We made this decision because it allows for Chimera to perform three important tasks:</p>
          <ol className={orderedList}>
            <li>Create and configure new AWS resources as needed throughout the deployment process.</li>
            <li>Query AWS CloudMap for metrics to determine whether the canary service is healthy.</li>
            <li>Control the deployment process by configuring App Mesh as needed.</li>
          </ol>
          <p>This choice also gives Chimera the ability to pull down the exact configuration details of an existing AWS service, modify or add only the configuration options that are specifically required to deploy a new version, and then deploy an almost exact replica of the original service using the new version of the code. This helped us to reduce the configuration input required from the user. In most cases, Chimera can obtain all the configuration details it needs given only the name of an AWS resource.</p>
        </div>
        <h3 className={subHeader}>How Will Chimera Collect Metrics?</h3>
        <div className={textDiv}>
          <p>A particularly challenging part of designing Chimera was determining how Chimera would collect metrics from the canary service to determine whether a rollback should occur. We decided early on that we would use AWS CloudWatch for metrics monitoring because it is provided directly by AWS and works well with ECS with very little configuration. The hurdle we faced was determining how the metrics would be exported from the Envoy proxy attached to the canary into CloudWatch.</p>
          <figure className={figureFormat}>
            <div>
              <img className={imageFormat} src={manyCloudWatchAgents} alt="CloudWatch Agents added to every service"></img>
              <figcaption className={imageCaption}></figcaption>
            </div>
          </figure>
          <p>By default, the Envoy proxies used by App Mesh emit various metrics related to inter-service communication. The CloudWatch Agent application provided by AWS could be used to scrape these metrics, but this would require updating the task definition of each service in the ECS cluster to include this application. One of our key design goals was minimizing the impact that Chimera has on a user’s existing infrastructure, and this would require modifying each ECS service.</p>
          <figure className={figureFormat}>
            <div>
              <img className={imageFormat} src={oneCloudWatchAgent} alt="CloudWatch Agent added to only one service"></img>
              <figcaption className={imageCaption}></figcaption>
            </div>
          </figure>
          <p>To address this, we decided to instead use Prometheus to collect metrics from the Envoy proxies. Prometheus is a monitoring service that can be configured to scrape the proxies at regular intervals and collect specific metrics. A single CloudWatch Agent that has been configured to use Prometheus can be deployed onto the ECS cluster. Prometheus will then handle the task of scraping each of the proxies and the CloudWatch Agent service will handle exporting the collected metrics to CloudWatch. This greatly reduces the complexity of the infrastructure Chimera needs to create and has very little impact on the user’s system.</p>
        </div>
        <h3 className={subHeader}>What Metrics Will Chimera Use?</h3>
        <div className={textDiv}>
          <p>To determine which metrics Chimera would use when deeming a canary “healthy” or “unhealthy”, we began by considering what is commonly referred to as the Four Golden Signals:</p>
          <ul className={unorderedList}>
            <li>Saturation: A measure of the available compute resources that are currently being used.</li>
            <li>Traffic: A measure of the demand that is being placed on the system.</li>
            <li>Latency: A measure of the time required to handle a request.</li>
            <li>Error Rate: A measure of the number of the requests to the service that result in a failure.</li>
          </ul>
          <p>Saturation is a complex metric because there are multiple types of compute resources that should be considered, such as CPU and memory. The actual resource that is relevant is dependent on the nature of the system being tested. Some operations are memory intensive and others are more CPU intensive. In order to use this metric for health checks, Chimera would either require more complex user input for thresholds or it would need to be more opinionated about what thresholds are acceptable. This could hinder the transparency of the deployment process and make results less clear for the user. For this reason, we decided that Chimera would not consider saturation for health checks.</p>
          <p>Traffic comes with similar complications. A common measure of traffic is simply the number of HTTP requests that a service receives per second, but that is not always the case. For example, streaming applications may consider network I/O rate a more useful measure of traffic than the number of requests. Using traffic as a health check metric would involve similar complications to those of saturation, so Chimera does not consider traffic for health checks either.</p>
          <p>That left us with latency and error rate. We decided that Chimera would use error rate as its primary health check metric. A key benefit of using canary deployments is to minimize the amount of users that can be negatively impacted by errors in the new version of the code. We decided that error rate is the metric most closely aligned with that benefit. </p>
          <p>In keeping with the design goals of simplicity and ease-of-use, we decided that Chimera would track the number of HTTP 5xx status codes returned by the service. This keeps Chimera configuration simple because the user can just define a basic threshold. If the number of failures exceeds this threshold, Chimera will initiate an automatic rollback.</p>
        </div>
        <h3 className={subHeader}>What Canary Deployment Strategy Will Chimera Use?</h3>
          <div className={textDiv}>
          <p>Another design decision we faced was the strategy that Chimera would use to perform canary deployments.</p>
          <p>A common strategy involves comparing the performance of the new version with a copy of the production environment, which is called the “baseline”. The baseline has the same version and configuration as the production deployment, but it is deployed at the same time and in the same way as the canary we are testing.</p>
          <figure className={figureFormat}>
            <div>
              <img className={imageFormat} src={baseline} alt="Baseline service used with a canary"></img>
              <figcaption className={imageCaption}></figcaption>
            </div>
          </figure>
          <p>The reason it's useful to compare the canary to a baseline rather than the production deployment is that it can minimize factors that don't involve new code from skewing the results of a comparison. For example, if you compare a brand new version of a service to a version that has been running for a while, issues like cache warm up can make it seem like the canary is underperforming.</p>
          <p>We decided that it was not worth the added complexity specifically because of the fact that Chimera works with systems running on AWS Fargate. Even if Chimera deploys a baseline, it doesn't actually have control over when that service starts up or when it stops. Because the hardware is managed by AWS, we can't remove the factors that may skew the results of a comparison.</p>
          <figure className={figureFormat}>
            <div>
              <img className={imageFormat} src={noBaseline} alt="No baseline service used with a canary"></img>
              <figcaption className={imageCaption}></figcaption>
            </div>
          </figure>
          <p>Because of this, we decided that Chimera will not perform comparisons between a baseline or a production deployment. Chimera determines the health of a service by simply comparing metrics to user-defined thresholds.</p>
        </div>
      </div>
      <div id="futureWork" className={sectionDiv}>
        <h2 className={mainHeader}>Future Work</h2>
        <div className={textDiv}>
          <p>Chimera currently fits well as a part of a CI/CD pipeline for deploying microservices. But, there are some features and improvements we would like to add in the future.</p>
        </div>
        <h3 className={subHeader}>Improved CI/CD Pipeline Integration</h3>
        <div className={textDiv}>
          <p>The goal of a CI/CD pipeline is to fully automate the process of deploying new revisions of software. Chimera has to be run manually whenever the build phase of that pipeline is complete. This is typical for a continuous <em>delivery</em> process.</p>
          <figure className={figureFormat}>
            <div>
              <img className={imageFormat} src={CICDPipeline} alt="Chimera integrated as a fully automatic CICD pipeline"></img>
              <figcaption className={imageCaption}></figcaption>
            </div>
          </figure>
          <p>We would like to extend Chimera so that the user can set up automated canary deployments that trigger in response to some kind of event. For example, when a new docker image is pushed to a repository like AWS Elastic Container Repository or Docker Hub. This change would allow Chimera to function as either a continuous delivery or a continuous <em>deployment</em> tool.</p>
        </div>
        <h3 className={subHeader}>Webhooks and Improved Status Update Notifications</h3>
        <div className={textDiv}>
          <p>We would also like to improve how Chimera notifies users of the canary deployment’s status. Currently, status updates are sent to the front end of the Chimera application using an event stream from the backend that is actually managing the deployment. We would like to extend Chimera so that the user can provide a webhook URL when initiating the deployment. Chimera could then send status update notifications to this webhook URL which would give the user more flexibility in how they receive the status updates. For example, they could provide a webhook URL for a Slack channel so that the whole development team can be notified of the deployment process.</p>
          <figure className={figureFormat}>
            <div>
              <img className={imageFormat} src={webhook} alt="Chimear integrated with webhooks"></img>
              <figcaption className={imageCaption}></figcaption>
            </div>
          </figure>
        </div>
      </div>
      <div id="references" className={sectionDiv}>
        <h2 className={mainHeader}>References</h2>
        <div className={textDiv}>
          <p>paragraph text</p>
        </div>
      </div>
      <div id="ourTeam" className={sectionDiv}>
        <h2 className={mainHeader}>Our Team</h2>
        <div className={textDiv}>
          <TeamMembers />
        </div>
      </div>
    </>
  )  
}

export default Content


/*
    <>
      {sectionHeaders.map(header => {
        const paragraphs = caseStudy[header].split(/\n/)
        return (
          <div key={header} id={header} className='md:mx-64 mx-12'>
            <h2 className='font-koulen text-tyrianpurple text-4xl text-center my-6'>{header}</h2>
            <div className='font-sans text-lg space-y-3'>
              {paragraphs.map((paragraph, idx) => {
                
                return (
                  <p key={`${paragraph.length}-${header}-${idx}`}>{paragraph}</p>
                )
              })}
            </div>
          </div>    
        )
      })}
    </>


*/
