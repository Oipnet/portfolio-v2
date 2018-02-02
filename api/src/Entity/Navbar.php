<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * @ApiResource(
 *     attributes={"access_control"="is_granted('ROLE_USER')"},
 *     collectionOperations={
 *      "get"={"method"="GET", "access_control"="is_granted('IS_AUTHENTICATED_ANONYMOUSLY')"},
 *      "post"={"method"="POST"}
 *     }
 * )
 * @ORM\Entity(repositoryClass="App\Repository\NavbarRepository")
 */
class Navbar
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="text", length=150)
     */
    private $name;

    /**
     * @ORM\Column(type="text", length=150)
     */
    private $href;

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param mixed $name
     * @return Navbar
     */
    public function setName(string $name): Navbar
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return string
     */
    public function getHref()
    {
        return $this->href;
    }

    /**
     * @param string $href
     * @return Navbar
     */
    public function setHref(string $href): Navbar
    {
        $this->href = $href;

        return $this;
    }
}
