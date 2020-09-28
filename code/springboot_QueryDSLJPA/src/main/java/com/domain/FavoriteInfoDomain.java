package com.domain;


@Entity
@Getter
@Setter
@NoArgsConstructor
public class FavoriteInfoDomain {

	@Id
	@GeneratedValue(generator = "idGenerator")
	@GenericGenerator(name = "idGenerator", strategy = "uuid")
	private String id;
	
	private String favoriteStoreId;
	private String favoriteStoreCode;
	
	@ManyToOne(cascade=CascadeType.PERSIST,fetch=FetchType.LAZY,optional=false)
	private MemberDomain memberDomain;
}
