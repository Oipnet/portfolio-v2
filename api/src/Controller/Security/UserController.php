<?php
namespace App\Controller\Security;

use App\Entity\Security\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Encoder\EncoderFactoryInterface;
use Symfony\Component\Routing\Annotation\Route;

class UserController
{
    /**
     * @var EncoderFactoryInterface
     */
    private $encoder;
    /**
     * @var EntityManagerInterface
     */
    private $em;

    public function __construct(EncoderFactoryInterface $encoder, EntityManagerInterface $em)
    {
        $this->encoder = $encoder->getEncoder(User::class);
        $this->em = $em;
    }

    /**
     * @Route("/create_user/{email}/{password}", name="create_user")
     * @param string $email
     * @param string $password
     * @return Response
     */
    public function createUserAction(string $email, string $password)
    {
        $user = new User();
        $user->setPassword($this->encoder->encodePassword($password, $user->getSalt()));
        $user->setUsername($email);

        $this->em->persist($user);
        $this->em->flush();

        return new Response('Success');
    }

}