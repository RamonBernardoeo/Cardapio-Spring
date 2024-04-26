package com.example.cardapio.food;

import jakarta.persistence.*;
import lombok.*;

@Table(name = "Foods")
//entidade do database
@Entity(name = "food")
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Food {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
   private String title;
    private String image;
    private Integer price;

    public Food(FoodRequestDTO data) {
        this.title = data.title();
        this.price = data.price();
        this.image = data.image();
    }
    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getImage() {
        return image;
    }

    public Integer getPrice() {
        return price;
    }





}
