<?php
namespace App\EventSubscriber;

use ApiPlatform\Core\EventListener\EventPriorities;
use App\Entity\Contact;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Event\GetResponseForControllerResultEvent;
use Symfony\Component\HttpKernel\KernelEvents;

final class ContactMailSubscriber implements EventSubscriberInterface
{
    private $mailer;

    public function __construct(\Swift_Mailer $mailer)
    {
        $this->mailer = $mailer;
    }

    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::VIEW => ['sendMail', EventPriorities::POST_WRITE],
        ];
    }

    public function sendMail(GetResponseForControllerResultEvent $event)
    {
        $contact = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

        if (!$contact instanceof Contact || Request::METHOD_POST !== $method) {
            return;
        }

        $message = (new \Swift_Message($contact->getSubject()))
            ->setFrom($contact->getSender())
            ->setTo('arnaud.pointet@gmail.com')
            ->setBody($contact->getMessage());

        $this->mailer->send($message);
    }
}